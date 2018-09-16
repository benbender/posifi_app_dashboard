import { from, of, empty, concat, iif } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { push } from "react-router-redux";
import { toast } from "react-toastify";
import { kebabCase } from "lodash";
import AWS from "aws-sdk";
import {
  APP_INIT,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SAVE_DATA_REQUEST,
  SAVE_DATA_ERROR,
  SAVE_DATA_SUCCESS
} from "../actions";

export var init = ($action, store) =>
  $action.ofType(APP_INIT).switchMap(() => {
    var logged = localStorage.getItem("logged");
    if (logged === "false") {
      return toLoginPage();
    } else {
      return from([push("/")]);
    }
  });

function toLoginPage() {
  return from([push("/auth")]);
}

export var login = ($action, store) =>
  $action
    .ofType(LOGIN_REQUEST)
    .delay(700)
    .switchMap(() => {
      var password = store.value.password;
      var user = store.value.user;
      if (user === "admin" && password === "admin") {
        localStorage.setItem("logged", true);
        return from([{ type: LOGIN_SUCCESS }, push({ pathname: "/" })]);
      } else {
        toast.error("Error de usuario/contraseña", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        return from([
          { type: LOGIN_ERROR, payload: "Usuario o contraseña invalidos" }
        ]);
      }
    });

export var showMessage = $action =>
  $action.ofType(`SAVE_DATA_SUCCESS_MAIN`).switchMap(() => {
    toast.success("Datos subidos con exito", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
    return of({ type: `POP_MESSAGE` });
  });

export var uploadInfo = ($action, store) => {
  return $action
    .ofType(SAVE_DATA_REQUEST)
    .delay(500)
    .switchMap(() => {
      var state = store.value;
      var s3bucket = new AWS.S3({
        accessKeyId: process.env.REACT_APP_IAM_USER_KEY,
        secretAccessKey: process.env.REACT_APP_IAM_USER_SECRET,
        Bucket: process.env.REACT_APP_BUCKET,
        region: "sa-east-1"
      });
      if (state.piece === "" || state.piece === undefined) {
        toast.error("Error, debe poner un nombre de obra", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        return of({ type: SAVE_DATA_ERROR });
      }
      var audioObs = empty();
      var photoObs = empty();
      var descObs = empty();
      var params = {};
      var buf;
      var err = false;
      if (state.audio !== "") {
        buf = new Buffer(
          state.audio.replace(/^data:audio\/\w+;base64,/, ""),
          "base64"
        );

        params = {
          Bucket: process.env.REACT_APP_BUCKET,
          Key: `${kebabCase(state.piece)}/${state.audioName}`,
          Body: buf,
          ContentEncoding: "base64",
          ContentType: "audio"
        };

        audioObs = from(s3bucket.upload(params).promise()).pipe(
          switchMap(() => {
            return of({ type: SAVE_DATA_SUCCESS });
          }),
          catchError(() => of({ type: SAVE_DATA_ERROR }))
        );
      }
      if (state.image !== "") {
        buf = new Buffer(
          state.image.replace(/^data:image\/\w+;base64,/, ""),
          "base64"
        );

        params = {
          Bucket: process.env.REACT_APP_BUCKET,
          Key: `${kebabCase(state.piece)}/${state.imageName}`,
          Body: buf,
          ContentEncoding: "base64",
          ContentType: "image"
        };

        photoObs = from(s3bucket.upload(params).promise()).pipe(
          switchMap(() => {
            return of({ type: `SAVE_DATA_SUCCESS2` });
          }),
          catchError(() => of({ type: SAVE_DATA_ERROR }))
        );
      }

      if (
        (state.audio !== undefined || state.image !== undefined) &&
        (state.description !== "" && state.description !== undefined)
      ) {
        params = {
          Bucket: process.env.REACT_APP_BUCKET,
          Key: `${kebabCase(state.piece)}/${state.piece}.json`,
          Body: JSON.stringify({ desc: state.description })
        };

        descObs = from(s3bucket.upload(params).promise()).pipe(
          switchMap(() => {
            return of({ type: `SAVE_DATA_SUCCESS_DESC` });
          }),
          catchError(() => of({ type: SAVE_DATA_ERROR }))
        );
      }
      return concat(
        audioObs,
        photoObs,
        descObs,
        iif(
          () => err === false,
          of({ type: `SAVE_DATA_SUCCESS_MAIN` }),
          of({ type: SAVE_DATA_ERROR })
        )
      );
    })
    .catch(err => {
      toast.error("No se pudo subir informacion, intente luego", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      console.log(err);
    });
};

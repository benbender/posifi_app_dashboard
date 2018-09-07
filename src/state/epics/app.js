import { Observable } from "rxjs";
import { push } from "react-router-redux";
import { toast } from "react-toastify";
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
      return Observable.from([push("/")]);
    }
  });

function toLoginPage() {
  return Observable.from([push("/auth")]);
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
        return Observable.from([
          { type: LOGIN_SUCCESS },
          push({ pathname: "/" })
        ]);
      } else {
        toast.error("Error de usuario/contraseña", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        return Observable.from([
          { type: LOGIN_ERROR, payload: "Usuario o contraseña invalidos" }
        ]);
      }
    });

export var uploadInfoS3 = ($action, store) => {
  return $action
    .ofType(SAVE_DATA_REQUEST)
    .delay(500)
    .switchMap(async () => {
      console.log(process.env);
      var state = store.value;
      var s3bucket = new AWS.S3({
        accessKeyId: process.env.REACT_APP_IAM_USER_KEY,
        secretAccessKey: process.env.REACT_APP_IAM_USER_SECRET,
        Bucket: process.env.REACT_APP_BUCKET
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
        return Observable.from([{ type: SAVE_DATA_ERROR }]);
      }
      if (state.audio !== "") {
        var params = {
          Bucket: process.env.REACT_APP_BUCKET,
          Key: `mnav/${state.audioName}`,
          Body: state.audio
        };
        await s3bucket
          .upload(params)
          .promise()
          .catch(err => console.log(err));
      }
      return Observable.from([{ type: SAVE_DATA_SUCCESS }]);
    });
};

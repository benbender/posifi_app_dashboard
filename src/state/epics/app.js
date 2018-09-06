import { Observable } from "rxjs";
import { push } from "react-router-redux";
import { toast } from "react-toastify";

import {
  APP_INIT,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
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

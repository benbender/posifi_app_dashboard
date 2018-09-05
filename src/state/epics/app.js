import { Observable } from "rxjs";
import { push } from "react-router-redux";
import { APP_INIT } from "../actions";
export var init = ($action, store) =>
  $action.ofType(APP_INIT).switchMap(() => {
    var logged = store.value.login;
    if (!logged) {
      return toLoginPage();
    } else {
      return Observable.from([push("/")]);
    }
  });

function toLoginPage() {
  return Observable.from([push("/auth")]);
}

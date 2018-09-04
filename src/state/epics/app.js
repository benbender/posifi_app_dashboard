import { Observable } from "rxjs";
import { push } from "react-router-redux";
import { APP_INIT } from "../actions";
export var init = ($action, store) =>
  $action.ofType(APP_INIT).switchMap(() => {
    var state = store.getState();

    console.log(state.app.login);
    if (!state.app.login) {
      return toLoginPage();
    } else {
      return Observable.empty();
    }
  });

function toLoginPage() {
  return Observable.from([push({ url: "/auth" })]);
}

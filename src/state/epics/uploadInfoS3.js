import { Observable } from "rxjs";

export var uploadInfoS3 = ($action, state) => {
  return $action.ofType("UPLOAD_INFO").switchMap(() => {
    return Observable.empty();
  });
};

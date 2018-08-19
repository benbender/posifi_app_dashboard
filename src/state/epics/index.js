import "rxjs/add/observable/of";
import "rxjs/add/observable/from";
import "rxjs/add/observable/empty";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { combineEpics } from "redux-observable";

import { uploadInfoS3 } from "./uploadInfoS3";

export var rootEpic = combineEpics(uploadInfoS3);

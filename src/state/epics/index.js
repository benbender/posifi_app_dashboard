import "rxjs/add/observable/of";
import "rxjs/add/observable/from";
import "rxjs/add/observable/empty";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/delay";
import "rxjs/add/observable/defer";
import { combineEpics } from "redux-observable";

import { init, login, uploadInfoS3 } from "./app";
export var rootEpic = combineEpics(init, login, uploadInfoS3);

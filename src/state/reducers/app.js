import {
  SET_INPUT,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_FILE,
  SAVE_DATA_SUCCESS,
  SAVE_DATA_ERROR,
  SAVE_DATA_REQUEST
} from "../actions";

var defaultState = {
  app: {
    login: false
  },
  imageName: "",
  audioName: "",
  audio: "",
  photo: ""
};

export var rootReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_INPUT:
      return {
        ...state,
        [payload.key]: payload.value
      };
    case SET_FILE:
      return {
        ...state,
        ...unwrapFiles(payload.files)
      };
    case LOGIN_REQUEST:
    case SAVE_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_ERROR:
    case SAVE_DATA_ERROR:
      return {
        ...state,
        loading: false
      };
    case LOGIN_SUCCESS:
    case SAVE_DATA_SUCCESS:
      return {
        ...state,
        loading: false
      };
    default:
      return { ...state };
  }
};

function unwrapFiles(files) {
  var object = {};
  files.forEach(element => {
    object[element.type] = element.fileUrl;
    object[`${element.type}Name`] = element.name;
  });
  return object;
}

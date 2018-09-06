import {
  SET_INPUT,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_FILE
} from "../actions";

var defaultState = {
  app: {
    login: false
  },
  imageName: "",
  audioName: ""
};

export var rootReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_INPUT:
      return {
        ...state,
        [payload.key]: payload.value
      };
    case SET_FILE:
      console.log(payload);
      var name =
        payload.key === "photo"
          ? { imageName: payload.name }
          : { audioName: payload.name };
      return {
        ...state,
        [payload.key]: payload.value,
        ...name
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false
      };
    default:
      return { ...state };
  }
};

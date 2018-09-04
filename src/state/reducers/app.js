import { SET_INPUT } from "../actions";

var defaultState = {
  app: {
    login: false
  }
};

export var rootReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_INPUT:
      return {
        ...state,
        [payload.key]: payload.value
      };
    default:
      return { ...state };
  }
};

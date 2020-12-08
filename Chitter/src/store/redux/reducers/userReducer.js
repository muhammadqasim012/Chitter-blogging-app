import * as actionTypes from "../actions/types";

const initialState = {
  userdata: {},
  appId: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USERDATA:
    case actionTypes.CHECK_ASYNC:
      console.log(action.payload);
      return {
        ...state,
        userdata: action.payload
      };
    case actionTypes.SET_APPID:
      return {
        ...state,
        appId: action.payload
      };

    default:
      return state;
  }
}

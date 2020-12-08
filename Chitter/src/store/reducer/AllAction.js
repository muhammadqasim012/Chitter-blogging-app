import {AllAction} from '../action/index';

const INITIAL_STATE = {
  error: null,
  SignUpRes: null,
  LoginRes: null,
  PostChitRes: null,
  PostPhotoRes: null,
  ChittListRes: null,
};

export default function AllActionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    //SignUp
    case AllAction.SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        SignUpRes: action.payload,
        error: null,
      });

    case AllAction.SIGN_UP_FAILURE:
      return Object.assign({}, state, {
        SignUpRes: null,
        error: action.payload,
      });

    //Login
    case AllAction.LOGIN_SUCCESS:
      console.log('RedSuc');
      return Object.assign({}, state, {
        LoginRes: action.payload,
        error: null,
      });
    case AllAction.LOGIN_FAILURE:
      return Object.assign({}, state, {
        LoginRes: null,
        error: action.payload,
      });

    //PostChit
    case AllAction.POST_CHIT_SUCCESS:
      console.log('RedSuc');

      return Object.assign({}, state, {
        PostChitRes: action.payload,
        error: null,
      });
    case AllAction.POST_CHIT_FAILURE:
      return Object.assign({}, state, {
        PostChitRes: null,
        error: action.payload,
      });

    //PostPhoto
    case AllAction.POST_PHOTO_SUCCESS:
      return Object.assign({}, state, {
        PostPhotoRes: action.payload,
        error: null,
      });
    case AllAction.POST_PHOTO_FAILURE:
      return Object.assign({}, state, {
        PostPhotoRes: null,
        error: action.payload,
      });

    //ChittList
    case AllAction.GET_CHITS_LIST_SUCCESS:
      return Object.assign({}, state, {
        ChittListRes: action.payload,
        error: null,
      });
    case AllAction.GET_CHITS_LIST_FAILURE:
      return Object.assign({}, state, {
        ChittListRes: null,
        error: action.payload,
      });

    //Null
    case AllAction.ALL_NULL:
      return Object.assign({}, state, {
        error: null,
        SignUpRes: null,
        LoginRes: null,
        PostChitRes: null,
        PostPhotoRes: null,
        ChittListRes: null,
      });

    default:
      return state;
  }
}

export default class AllAction {
  static LOGIN = 'LOGIN';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGIN_FAILURE = 'LOGIN_FAILURE';

  static SIGN_UP = 'SIGN_UP';
  static SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
  static SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

  static POST_CHIT = 'POST_CHIT';
  static POST_CHIT_SUCCESS = 'POST_CHIT_SUCCESS';
  static POST_CHIT_FAILURE = 'POST_CHIT_FAILURE';

  static POST_PHOTO = 'POST_PHOTO';
  static POST_PHOTO_SUCCESS = 'POST_PHOTO_SUCCESS';
  static POST_PHOTO_FAILURE = 'POST_PHOTO_FAILURE';

  static GET_CHITS_LIST = 'GET_CHITS_LIST';
  static GET_CHITS_LIST_SUCCESS = 'GET_CHITS_LIST_SUCCESS';
  static GET_CHITS_LIST_FAILURE = 'GET_CHITS_LIST_FAILURE';

  static ALL_NULL = 'ALL_NULL';

  static AllListsNull() {
    return {
      type: AllAction.ALL_NULL,
    };
  }
  static Login(payload) {
    console.log('Action');
    return {
      type: AllAction.LOGIN,
      payload,
    };
  }

  static SignUp(payload) {
    return {
      type: AllAction.SIGN_UP,
      payload,
    };
  }
  static PostChit(payload) {
    return {
      type: AllAction.POST_CHIT,
      payload,
    };
  }

  static PostPhoto(payload) {
    return {
      type: AllAction.POST_PHOTO,
      payload,
    };
  }

  static getChitList(payload) {
    return {
      type: AllAction.GET_CHITS_LIST,
      payload,
    };
  }
}

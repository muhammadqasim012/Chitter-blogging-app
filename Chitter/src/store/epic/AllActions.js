import {Observable} from 'rxjs';
import {AllAction} from './../action/index';
import {axiosPost, axiosPut, axiosDelete, axiosGet} from '../service/index';
import constants from '../utilities/constants';
const constant = constants.getConstant();

export default class AllActionEpic {
  static SignUp = action$ =>
    action$
      .ofType(AllAction.SIGN_UP)
      .do(x => x)
      .switchMap(({payload}) => {
        console.log('payloadAtEpic', payload);
        console.log(
          '`${constant.url}/api/v0.0.5/user`',
          `${constant.url}/api/v0.0.5/user`,
        );
        return axiosPost(`${constant.url}/api/v0.0.5/user`, payload)
          .map(response => {
            console.log('responce', response);
            if (response.status === 201) {
              return {
                type: AllAction.SIGN_UP_SUCCESS,
                payload: response.data,
              };
            } else {
              return {
                type: AllAction.SIGN_UP_FAILURE,
                payload: response.data,
              };
            }
          })
          .catch(err =>
            Observable.of({
              type: AllAction.SIGN_UP_FAILURE,
              payload: err,
            }),
          );
      });

  static Login = action$ =>
    action$
      .ofType(AllAction.LOGIN)
      .do(x => x)
      .switchMap(({payload}) => {
        return axiosPost(`${constant.url}/api/v0.0.5/login`, payload)
          .map(response => {
            console.log('responce', response);
            if (response.status === 200) {
              return {
                type: AllAction.LOGIN_SUCCESS,
                payload: response.data,
              };
            } else {
              return {
                type: AllAction.LOGIN_FAILURE,
                payload: response.data,
              };
            }
          })
          .catch(err =>
            Observable.of({
              type: AllAction.LOGIN_FAILURE,
              payload: 'err',
            }),
          );
      });

  static PostChit = action$ =>
    action$
      .ofType(AllAction.POST_CHIT)
      .do(x => x)
      .switchMap(({payload}) => {
        console.log('epic', payload);
        return axiosPost(
          `${constant.url}/api/v0.0.5/chits`,
          payload.newPayload,
          payload.token,
        )
          .map(response => {
            console.log('responce', response);
            if (response.status === 201) {
              return {
                type: AllAction.POST_CHIT_SUCCESS,
                payload: response.data,
              };
            } else {
              return {
                type: AllAction.POST_CHIT_FAILURE,
                payload: response.data,
              };
            }
          })
          .catch(err =>
            Observable.of({
              type: AllAction.POST_CHIT_FAILURE,
              payload: err,
            }),
          );
      });

  static PostPhoto = action$ =>
    action$
      .ofType(AllAction.POST_PHOTO)
      .do(x => x)
      .switchMap(({payload}) => {
        console.log('epic', payload);
        return axiosPost(
          `${constant.url}/api/v0.0.5/chits/${payload.newPayload.chit_id}/photo`,
          payload.newPayload,
          payload.token,
        )
          .map(response => {
            console.log('responce', response);
            if (response.status === 201) {
              return {
                type: AllAction.POST_PHOTO_SUCCESS,
                payload: response.data,
              };
            } else {
              return {
                type: AllAction.POST_PHOTO_FAILURE,
                payload: response.data,
              };
            }
          })
          .catch(err =>
            Observable.of({
              type: AllAction.POST_PHOTO_FAILURE,
              payload: err,
            }),
          );
      });

  static getChitList = action$ =>
    action$
      .ofType(AllAction.GET_CHITS_LIST)
      .do(x => x)
      .switchMap(({payload}) => {
        console.log('epic', payload);
        return axiosGet(`${constant.url}/api/v0.0.5/chits`, payload.token)
          .map(response => {
            console.log('responce', response);
            if (response.status === 200) {
              return {
                type: AllAction.GET_CHITS_LIST_SUCCESS,
                payload: response.data,
              };
            } else {
              return {
                type: AllAction.GET_CHITS_LIST_FAILURE,
                payload: response.data,
              };
            }
          })
          .catch(err =>
            Observable.of({
              type: AllAction.GET_CHITS_LIST_FAILURE,
              payload: err,
            }),
          );
      });
}

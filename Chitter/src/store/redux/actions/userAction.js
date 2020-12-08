import * as actionTypes from "./types";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationActions, StackActions } from "react-navigation";
import server from "../../constants/server";

export const signUp = (navigation, userdata, appId) => async dispatch => {
  console.log(appId);
  // console.log(userdata);
  dispatch({
    type: actionTypes.START_LOADING,
    payload: "signing you up"
  });

  axios
    .post(`${server}registerMember`, {
      ...userdata,
      appId
    })
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        let user = res.data.data;
        dispatch({
          type: actionTypes.SET_USERDATA,
          payload: user
        });
        AsyncStorage.setItem("user", JSON.stringify(user)).then(
          asyncResponse => {
            dispatch({
              type: actionTypes.NOT_LOADING
            });
            navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    routeName: "Congratulations"
                  })
                ]
              })
            );
          }
        );
      }
    })

    .catch(error => {
      console.log(error);
      dispatch({
        type: actionTypes.NOT_LOADING
      });

      if (error.response.status === 400)
        alert(error.response.data.data.message);
      else alert("Some Problem Occured");
    });
};

checkAsync = (navigation, dispatch, appId) => {
  dispatch({
    type: actionTypes.START_LOADING,
    payload: "checking your auth state"
  });
  AsyncStorage.getItem("user").then(user => {
    // console.log(user);
    var user = JSON.parse(user);
    if (user) {
      dispatch({
        type: actionTypes.CHECK_ASYNC,
        payload: { ...user, appId: appId }
      });
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "BottomTabNav" })]
        })
      );
    }
  });
  dispatch({
    type: actionTypes.NOT_LOADING
  });
};

export const startLoading = () => async dispatch => {
  dispatch({
    type: actionTypes.START_LOADING
  });
};

export const signIn = (navigation, userdata, appId) => async dispatch => {
  // console.log(userdata);
  dispatch({
    type: actionTypes.START_LOADING,
    payload: "Loging you In"
  });

  axios
    .post(`${server}loginMember`, {
      ...userdata,
      appId
    })
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        let user = res.data.data;
        dispatch({
          type: actionTypes.SET_USERDATA,
          payload: user
        });
        AsyncStorage.setItem("user", JSON.stringify(user)).then(
          asyncResponse => {
            dispatch({
              type: actionTypes.NOT_LOADING
            });
            navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    routeName: "BottomTabNav"
                  })
                ]
              })
            );
          }
        );
      }
    })

    .catch(error => {
      console.log(error);
      dispatch({
        type: actionTypes.NOT_LOADING
      });

      if (error.response.status === 400)
        alert(error.response.data.data.message);
      else alert("Some Problem Occured");
    });
};

export const logOut = navigation => async dispatch => {
  AsyncStorage.removeItem("user").then(asyncResponse => {
    let user = {};
    dispatch({
      type: actionTypes.SET_USERDATA,
      payload: user
    });

    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "Main"
          })
        ]
      })
    );
  });
};

export const getAppId = navigation => async dispatch => {
  dispatch({
    type: actionTypes.START_LOADING,
    payload: "getting App Id"
  });

  axios
    .get(`${server}getAppID`)
    .then(res => {
      // console.log(res);

      if (res.status === 201) {
        dispatch({
          type: actionTypes.SET_APPID,
          payload: res.data.data.app_id
        });
        checkAsync(navigation, dispatch, res.data.data.app_id);
      }
    })

    .catch(error => {
      console.log(error);
      dispatch({
        type: actionTypes.NOT_LOADING
      });

      alert("Some Problem Occured in getting App Id");
    });
};

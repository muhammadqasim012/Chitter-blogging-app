import {Observable} from 'rxjs';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// "X-Authorization: e99891fb2c9fe5b91512f5d1d9eb5988"
// const newToken = '';
// const token = async () => {
//   try {
//     const value = await AsyncStorage.getItem('token');
//     if (value !== null) {
//       return value;
//     }
//   } catch (e) {
//     // error reading value
//   }
// };
const axiosPost = (
  url,
  body,
  Authorization,
  headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Authorization': Authorization,
  },
) => {
  return Observable.fromPromise(
    axios.post(url, JSON.stringify(body), {headers}),
  );
};

const axiosPut = (
  url,
  body,
  headers = {'Content-Type': 'application/json; charset=utf-8'},
) => {
  return Observable.fromPromise(
    axios.put(url, JSON.stringify(body), {headers}),
  );
};

const axiosDelete = (
  url,
  headers = {'Content-Type': 'application/json; charset=utf-8'},
) => {
  return Observable.fromPromise(axios.delete(url, {headers}));
};

const axiosGet = (
  url,
  Authorization,
  headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Authorization': Authorization,
  },
) => {
  return Observable.fromPromise(axios.get(url, {headers}));
};

const axiosGetParams = (
  url,
  params,
  headers = {'Content-Type': 'application/json; charset=utf-8'},
) => {
  return Observable.fromPromise(axios.get(url, {params, headers}));
};
const axiosDeleteParams = (
  url,
  params,
  headers = {'Content-Type': 'application/json; charset=utf-8'},
) => {
  return Observable.fromPromise(axios.delete(url, {params, headers}));
};

export {
  axiosGet,
  axiosPost,
  axiosPut,
  axiosDelete,
  axiosGetParams,
  axiosDeleteParams,
};

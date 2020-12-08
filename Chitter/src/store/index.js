// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

// reducers

import {AllActionReducer} from './reducer/index';

// epics

import {AllActionEpic} from './epic/index';

// Application Epics / Effects
const persistConfig = {
  key: 'root',
  storage,
};

const rootEpic = combineEpics(
  AllActionEpic.SignUp,
  AllActionEpic.Login,
  AllActionEpic.PostChit,
  AllActionEpic.PostPhoto,
  AllActionEpic.getChitList,
);

// Application Reducers
const rootReducer = combineReducers({
  AllActionReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const epicMiddleware = createEpicMiddleware(rootEpic);
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);
// epicMiddleware.run(rootEpic);

export let store = createStoreWithMiddleware(persistedReducer);
export let persistor = persistStore(store);
// Export Actions
export * from './action/index';

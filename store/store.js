import { configureStore ,applyMiddleware,combineReducers} from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger"
import mapSlice from './mapReducer';
import userSlice from './userReducer';
import loginSlice from './loginStatus';
import userInfoSlice from "./userInfoReducer"
import postIdSlice from "./postId"
import {  FLUSH,REHYDRATE, PAUSE,PERSIST,PURGE,REGISTER, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer=combineReducers({
    map:mapSlice,
    user:userSlice,
    login:loginSlice,
    userInfo:userInfoSlice,
    postId:postIdSlice

  })
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
},composeWithDevTools(applyMiddleware(logger)))

export default store;
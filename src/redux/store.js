import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userAuth from "./authSliceUser";
import {loaderSlice} from './topLoadingBar'
import saveUserData from "./userDataSlice";

const reducer = combineReducers({
    loader: loaderSlice.reducer,
    user:userAuth.reducer,
    userData:saveUserData.reducer
})

const store = configureStore({
    reducer,
})

export default store
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userAuth from "./authSliceUser";
import {loaderSlice} from './topLoadingBar'

const reducer = combineReducers({
    loader: loaderSlice.reducer,
    user:userAuth.reducer
})

const store = configureStore({
    reducer,
})

export default store
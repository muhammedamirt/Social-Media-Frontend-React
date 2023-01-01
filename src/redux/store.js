import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {loaderSlice} from './topLoadingBar'

const reducer = combineReducers({
    loader: loaderSlice.reducer,
})

const store = configureStore({
    reducer,
})

export default store
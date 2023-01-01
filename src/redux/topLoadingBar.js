import {createSlice} from '@reduxjs/toolkit'

export const loaderSlice=createSlice({
    name:"loader",
    initialState:{
        progress:10,
    },
    reducers:{
        routeChanged:(state)=>{
            state.progress = 100
        }
    }
})

// export default loaderSlice.reducer
export const {routeChanged} = loaderSlice.actions
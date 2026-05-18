import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        firstName:"",
        count:10,
        students:[]
    },

    reducers:{
        increaseCount:(state)=>{
            state.count++
        },


        increaseCountBy:(state, action)=>{
            state.count = state.count + action.payload
        }


    }
})

export default appSlice.reducer;

export const {increaseCount, increaseCountBy } = appSlice.actions
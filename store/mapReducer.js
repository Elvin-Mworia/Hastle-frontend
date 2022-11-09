import {createSlice} from "@reduxjs/toolkit"


const mapSlice=createSlice({
name:"map",
initialState:{
    lat:-1.286389,
    lng:36.817223
},
reducers:{
    updatemap:(state,action)=>{
        state.lat=action.payload.lat;
         state.lng=action.payload.lng;

    }
}
})

export const  {updatemap}=mapSlice.actions;
export default mapSlice.reducer;


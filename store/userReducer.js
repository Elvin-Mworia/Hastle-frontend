import {createSlice} from "@reduxjs/toolkit"


const userSlice=createSlice({
name:"user",
initialState:{
   client:false,
   worker:false
},
reducers:{
    updateuser:(state,action)=>{
        state.client=action.payload.client;
         state.worker=action.payload.worker;

    }
}
})

export const  {updateuser}=userSlice.actions;
export default userSlice.reducer;

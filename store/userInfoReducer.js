import {createSlice} from "@reduxjs/toolkit"

const userInfoSlice=createSlice({
name:"userinfo",
initialState:{
   id:"",
   token:"",
   name:"",
   email:"",
   client:false,
   worker:false
   
},
reducers:{
    updateuserinfo:(state,action)=>{
        state.id=action.payload.id;
         state.token=action.payload.token;
         state.name=action.payload.name;
 state.email=action.payload.email;
 state.worker=action.payload.worker;
 state.client=action.payload.client;

    }
}
})

export const  {updateuserinfo}=userInfoSlice.actions;
export default userInfoSlice.reducer;

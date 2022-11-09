import {createSlice} from "@reduxjs/toolkit"


const loginSlice=createSlice({
name:"login",
initialState:{
   loginStatus:false,
  
},
reducers:{
    updateLoginState:(state,action)=>{
        state.loginStatus=action.payload.loginStatus;
         

    }
}
})

export const  {updateLoginState}=loginSlice.actions;
export default loginSlice.reducer;

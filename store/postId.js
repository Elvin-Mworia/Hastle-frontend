import {createSlice} from "@reduxjs/toolkit"

const postIdSlice=createSlice({
name:"postid",
initialState:{
   postid:"",

},
reducers:{
    postId:(state,action)=>{
        state.postid=action.payload.id;
         

    }
}
})

export const  {postId}=postIdSlice.actions;
export default postIdSlice.reducer;
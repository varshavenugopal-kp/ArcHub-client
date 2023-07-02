import { createSlice } from "@reduxjs/toolkit";
// type userState={
//     userid:string;
//     email:string
// }

const initial={
    userid:'',
    email:'',
}
const userSlice = createSlice({
    name: "user",
    initialState: initial,
    reducers: {
       setProfile:(state,action)=>{
        state.userid=action.payload.userid
        state.email=action.payload.email
       },
      }
  });

  export const {setProfile}=userSlice.actions
  export default userSlice.reducer
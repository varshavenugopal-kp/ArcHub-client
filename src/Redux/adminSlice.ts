import { createSlice } from "@reduxjs/toolkit";
const initial={
    // adminid:'',
    adminemail:'',
}
const adminSlice = createSlice({
    name: "admin",
    initialState: initial,
    reducers: {
       setProfile:(state,action)=>{
        // state.adminid=action.payload.adminid
        state.adminemail=action.payload.adminemail
       },
      }
  });

  export const {setProfile}=adminSlice.actions
  export default adminSlice.reducer
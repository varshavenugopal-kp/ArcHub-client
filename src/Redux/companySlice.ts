import { createSlice } from "@reduxjs/toolkit";
const initial={
    cid:'',
    companyemail:'',
}
const companySlice = createSlice({
    name: "company",
    initialState: initial,
    reducers: {
       setProfile:(state,action)=>{
        state.cid=action.payload.ciid
        state.companyemail=action.payload.companyemail
       },
      }
  });

  export const {setProfile}=companySlice.actions
  export default companySlice.reducer
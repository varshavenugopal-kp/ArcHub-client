import { createSlice } from "@reduxjs/toolkit";
const initial={
    cid:'',
    companyemail:'',
}
const companySlice = createSlice({
    name: "company",
    initialState: initial,
    reducers: {
       setCompany:(state,action)=>{
        state.cid=action.payload.cid
        state.companyemail=action.payload.companyemail
       },
      }
  });

  export const {setCompany}=companySlice.actions
  export default companySlice.reducer
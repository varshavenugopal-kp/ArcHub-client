import { createSlice } from "@reduxjs/toolkit";
const initial={
    cid:'',
    cmpName:'',
    companyemail:'',
    cmplocation:'',
    cmpState:'',
    cmpDistrict:'',
    contact:'',
    website:''
}
const companySlice = createSlice({
    name: "company",
    initialState: initial,
    reducers: {
       setCompany:(state,action)=>{
        state.cid=action.payload.cid
        state.companyemail=action.payload.companyemail
        state.cmpName=action.payload.cmpName
        state.cmplocation=action.payload.cmplocation
        state.cmpState=action.payload.cmpState
        state.cmpDistrict=action.payload.cmpDistrict
        state.contact=action.payload.contact
        state.website=action.payload.website
       },
      }
  });

  export const {setCompany}=companySlice.actions
  export default companySlice.reducer
import { validateEmail } from "./RegValidation"

export function validateJobApply(name:string,value:string|Number,err:object,setErr:Function):void{
if(name==='first'){
   validateFirst(String(value),err,setErr)
} if(name==='last'){
    validateLast(String(value),err,setErr)
} if(name==='phone'){
    console.log("lastname");
    
    validatephone(Number(value),err,setErr)
} if(name==='email'){
    validateemail(String(value),err,setErr)
} if(name==='experience'){
    validateexperience(String(value),err,setErr)
} if(name==='qualification'){
    validateQualification(String(value),err,setErr)
} 
}

export function validateFirst(value:string,err:object,setErr:Function):void{
    const firstValidate:RegExp=/^[a-zA-Z0-9]{4,20}$/
    if(value.trim().length==0){
        setErr({...err,first:"FirstName should not be empty"})
    }else if(!firstValidate.test(value)){
        setErr({...err,first:"Enter a valid firstname"})
    }else{
        setErr({...err,first:""})
    }
}

export function validateLast(value:string,err:object,setErr:Function):void{
    const lastValidate:RegExp=/^[a-zA-Z0-9]{4,20}$/
    if(value.trim().length==0){
        setErr({...err,last:"LastName should not be empty"})
    }else if(!lastValidate.test(value)){
        setErr({...err,last:"Enter a valid lastname"})
    }else{
        setErr({...err,last:""})
    }
}

export function validatephone(value:Number,err:object,setErr:Function):void{
    const phoneValidate:RegExp=/^\d{10}$/

    const valueAsString = value.toString();
   if(valueAsString.trim().length==0){
        setErr({...err,phone:"phone should not be empty"})
    }else
     if(valueAsString.length !== 10 || valueAsString.split(" ").length > 1){
        setErr({...err,phone:"Enter a valid phone"})
    }else{
        setErr({...err,phone:""})
    }
}

export function validateemail(value:string,err:object,setErr:Function):void{
    const emailValidate:RegExp=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    if(value.trim().length==0){
        setErr({...err,email:"email should not be empty"})
    }else if(!emailValidate.test(value)){
        setErr({...err,email:"Enter a valid email"})
    }else{
        setErr({...err,email:""})
    }
}



export function validateQualification(value:string,err:object,setErr:Function):void{
    const QualificationValidate:RegExp=/^[a-zA-Z0-9]{4,20}$/
    if(value.trim().length==0){
        setErr({...err,Qualification:"Qualification should not be empty"})
    }else if(!QualificationValidate.test(value)){
        setErr({...err,Qualification:"Enter a valid Qualification"})
    }else{
        setErr({...err,Qualification:""})
    }
}


export function validateexperience(value:string,err:object,setErr:Function):void{
    const experienceValidate:RegExp=/^[a-zA-Z0-9]{4,20}$/
    if(value.trim().length==0){
        setErr({...err,experience:"experience should not be empty"})
    }else{
        setErr({...err,experience:""})
    }
}








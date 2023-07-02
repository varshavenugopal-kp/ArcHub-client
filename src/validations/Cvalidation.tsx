export function validateUser(name:string,value:string,err:object,setErr:Function,password:string):void{
   if(name==='cname'){
    validateCname(value,err,setErr)
   }
   if(name==='location'){
    validatelocation(value,err,setErr)
   }
   if(name==='district'){
    validateDist(value,err,setErr)
   }
   if(name==='state'){
    validatestate(value,err,setErr)
   }
   if(name==='email'){
    validateEmail(value,err,setErr)
   }
   if(name==='password'){
    validatePswd(value,err,setErr)
   }
   if(name==='cpassword'){
    validateCpswd(value,err,setErr,password)
   }
}


export function validateCname(value:string,Err:object,setErr:Function):void{
    const nameRegx:RegExp= /^[a-zA-Z0-9]{4,12}$/
    if((value.trim()).length===0){
        setErr({...Err,cname:"Company name should not be empty"})
      }else if(!nameRegx.test(value)){
          setErr({...Err,cname:"Enter a valid name"})
      }else{
       setErr({...Err,cname:""})
      }
}

export function validatelocation(value:string,Err:object,setErr:Function):void{
    const locRegx:RegExp= /^[a-zA-Z0-9]{4,12}$/
    if((value.trim()).length===0){
      setErr({...Err,location:"Location should not be empty"})
    }else if(!locRegx.test(value)){
        setErr({...Err,location:"Enter a valid location"})
    }else{
        setErr({...Err,location:""})
    }
 }

 export function validateDist(value:string,Err:object,setErr:Function):void{
    const distRegx:RegExp= /^[a-zA-Z0-9]{4,12}$/
    if((value.trim()).length===0){
      setErr({...Err,district:"district should not be empty"})
    }else if(!distRegx.test(value)){
        setErr({...Err,district:"Enter a valid district"})
    }else{
        setErr({...Err,district:""})
    }
 }

 export function validatestate(value:string,Err:object,setErr:Function):void{
    const stRegx:RegExp= /^[a-zA-Z0-9]{4,12}$/
    if((value.trim()).length===0){
      setErr({...Err,state:"state should not be empty"})
    }else if(!stRegx.test(value)){
        setErr({...Err,state:"Enter a valid state"})
    }else{
        setErr({...Err,state:""})
    }
 }

 export function validateEmail(value:string,Err:object,setErr:Function):void{
    const emailRegx:RegExp= /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    if((value.trim()).length===0){
      setErr({...Err,email:"email should not be empty"})
    }else if(!emailRegx.test(value)){
        setErr({...Err,email:"Enter a valid email"})
    }else{
        setErr({...Err,email:""})
    }
 }

 export function validatePswd(value:string,Err:object,setErr:Function):void{
    const pswdRegx:RegExp= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if((value.trim()).length===0){
      setErr({...Err,password:"password should not be empty"})
    }else if(!pswdRegx.test(value)){
        setErr({...Err,password:"Enter a valid password"})
    }else{
        setErr({...Err,password:""})
    }
 }

 export function validateCpswd(value:string,Err:object,setErr:Function,password:string):void{
    const cpswdRegx:RegExp= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if((value.trim()).length===0){
      setErr({...Err,lname:"password should not be empty"})
    }else if(value!=password){
        setErr({...Err,cpassword:"password does not match"})
    }else{
        setErr({...Err,cpassword:""})
    }
 }








export function validateData(name:string,value:string,err:object,setErr:Function,password:string):void{
    if(name==='fname'){
        validateFname(value,err,setErr)
    }
    if(name==='lname'){
        validateLname(value,err,setErr)
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

export function validateFname(value:string,Err:object,setErr:Function):void{
       const nameRegx:RegExp= /^[a-zA-Z0-9]{4,12}$/
       if((value.trim()).length===0){
         setErr({...Err,fname:"first name should not be empty"})
       }else if(!nameRegx.test(value)){
           setErr({...Err,fname:"Enter a valid name"})
       }else{
        setErr({...Err,fname:""})
       }
    }

    export function validateLname(value:string,Err:object,setErr:Function):void{
        const lnameRegx:RegExp= /^[a-zA-Z0-9]{4,12}$/
        if((value.trim()).length===0){
          setErr({...Err,lname:"Last name should not be empty"})
        }else if(!lnameRegx.test(value)){
            setErr({...Err,lname:"Enter a valid name"})
        }else{
            setErr({...Err,lname:""})
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
          setErr({...Err,cpassword:"password should not be empty"})
        }else if(value!=password){
            setErr({...Err,cpassword:"password does not match"})
        }else{
            setErr({...Err,cpassword:""})
        }
     }

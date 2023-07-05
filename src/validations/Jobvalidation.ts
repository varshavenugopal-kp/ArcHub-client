export function validateJob(name:string,value:string|number|Date,err:object,setErr:Function):void{
if(name==='title'){
  validateTitle(String(value),err,setErr)
}
if(name==='salary'){
  validateSalary(Number(value),err,setErr)
}
if(name==='qualification'){
  validateQualification(String(value),err,setErr)
}
if(name==='experience'){
  validateExperience(String(value),err,setErr)
}
}

export function validateTitle(value:string,err:object,setErr:Function):void{
  const titleRegex:RegExp=/^[a-zA-Z0-9]{4,12}$/
  if((value.trim()).length===0){
    setErr({...err,title:"Title should not be empty"})
  }else if(!titleRegex.test(value)){
    setErr({...err,title:"Enter a valid job title"})
  }else{
    setErr({...err,title:""})
  }
}

export function validateSalary(value:number,err:object,setErr:Function):void{
  if(value<=0){
    setErr({...err,salary:"Enter a valid salary"})
  }else{
    setErr({...err,salary:""})
  }
}

export function validateQualification(value:string,err:object,setErr:Function):void{
  const QualificationRegex:RegExp=/^[a-zA-Z0-9]{4,12}$/
  if((value.trim()).length===0){
    setErr({...err,Qualification:"Qualification should not be empty"})
  }else if(!QualificationRegex.test(value)){
    setErr({...err,Qualification:"Enter a valid job Qualification"})
  }else{
    setErr({...err,Qualification:""})
  }
}

export function validateExperience(value:string,err:object,setErr:Function):void{
  const ExperienceRegex:RegExp=/^[a-zA-Z0-9]{4,12}$/
  if((value.trim()).length===0){
    setErr({...err,Experience:"Experience should not be empty"})
  }else if(!ExperienceRegex.test(value)){
    setErr({...err,Experience:"Enter a valid job Experience"})
  }else{
    setErr({...err,Experience:""})
  }
}

export function validatetype(value:string,err:object,setErr:Function):void{
  const typeRegex:RegExp=/^[a-zA-Z0-9]{4,12}$/
  if((value.trim()).length===0){
    setErr({...err,type:"type should not be empty"})
  }else if(!typeRegex.test(value)){
    setErr({...err,type:"Enter a valid job type"})
  }else{
    setErr({...err,type:""})
  }
}
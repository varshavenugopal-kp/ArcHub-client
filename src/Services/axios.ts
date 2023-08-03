import axios from 'axios'
const BASE_URL=process.env.REACT_APP_BASE_URL;

export const apiAuth=axios.create({
    baseURL:BASE_URL
})
export const api=axios.create({
    baseURL:BASE_URL
})

api.interceptors.request.use(
    (config)=>{
        let token:any=localStorage.getItem('admin')
        // console.log("addd",token);
        if(token){
            token=JSON.parse(token)
            token=token.token
        console.log("minnn",token);
        }
        


        let userToken:any=localStorage.getItem('users')
        if(userToken) {
            userToken=JSON.parse(userToken)
        userToken=userToken.token
        console.log("llll",userToken);
        }


        // let empToken:any=localStorage.getItem('users')
        //  console.log("emp token=",empToken);

        let cmpToken:any=localStorage.getItem('company')
         console.log("jjj",cmpToken);
         
        
        if(cmpToken){
            cmpToken=JSON.parse(cmpToken)
            cmpToken=cmpToken.token
            console.log("llll",cmpToken);
        }

        
            config.headers['token']=token
            config.headers['userToken']=userToken
            config.headers['cmpToken']=cmpToken
        
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

// api.interceptors.request.use(
//     (config) => {
//       try {
//         let token:any = localStorage.getItem('admin');
//         if(token) token=JSON.parse(token)
//         token=token.token

        
        
//         let userToken:any = localStorage.getItem('users');
//         if(userToken) userToken=JSON.parse(userToken)
//         userToken=userToken.token

//         let cmpToken:any = localStorage.getItem('company')
//         if(cmpToken) cmpToken=JSON.parse(cmpToken)
//         cmpToken=cmpToken.token
//         console.log("llll",cmpToken);
        
       
     
//         if (token) config.headers['token'] = token;
//         if (userToken) config.headers['userToken'] = userToken;
//         if (cmpToken) config.headers['cmpToken'] = cmpToken;
  
//         return config;
//       } catch (error) {
//         console.error('Error while setting headers:', error);
//         return config;
//       }
//     }
    
//   );
  
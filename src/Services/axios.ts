import axios from 'axios'
import { error } from 'console';
import { config } from 'process';
const BASE_URL=process.env.REACT_APP_BASE_URL;
export const api=axios.create({
    baseURL:BASE_URL
})

api.interceptors.request.use(
    (config)=>{
        let token=localStorage.getItem('admin')
        let userToken=localStorage.getItem('user')
        let cmpToken=localStorage.getItem('company')
        
            config.headers['token']=token
            config.headers['userToken']=userToken
            config.headers['cmpToken']=cmpToken
        
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
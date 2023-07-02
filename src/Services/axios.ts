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
        if(token){
            config.headers['token']=token
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
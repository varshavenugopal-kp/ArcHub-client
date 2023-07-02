import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import adminReducer from './adminSlice'
import companyReducer from './companySlice'
import { persistReducer, persistStore } from "redux-persist";
import  storage from "redux-persist/lib/storage";

const persistConfig={
    key:'root',
    storage
}

const persistedReducer =persistReducer(persistConfig,userReducer)
const persistedAdminReducer =persistReducer(persistConfig,adminReducer)
const persistedCompanyReducer =persistReducer(persistConfig,companyReducer)
export const store=configureStore({
    reducer:{
        user:persistedReducer,
        admin:persistedAdminReducer,
        company:persistedCompanyReducer

    }
});
export const persistor=persistStore(store)
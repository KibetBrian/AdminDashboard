import  { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import storage from 'redux-persist/lib/storage'
import {  persistStore,  persistReducer,  FLUSH,  REHYDRATE,  PAUSE,  PERSIST,  PURGE,  REGISTER,} from 'redux-persist'

const persistConfig = 
{  
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore
(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    }
)

export let persistor = persistStore(store)
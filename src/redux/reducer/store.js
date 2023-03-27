// import {createStore}  from 'redux'
// import rootReducer from '../reducer/index';
// const store =createStore(rootReducer);
// export default store;

import { configureStore, combineReducers} from '@reduxjs/toolkit'
import addcart from '../reducer/addcart.js'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


const persistConfig = {
  key: 'persist',
  storage,
//  whitelist: ['addcart'] // which reducer want to store
};

const rootReducer = combineReducers({
    addcart: addcart
  
})

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: pReducer
})
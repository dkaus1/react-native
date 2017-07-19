import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose } from 'redux'; 
import  thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer'

const loggerMiddleware =  createLogger({predicate: (getState, action) => __DEV__})

const configureStore = (initialState) => {
  const enhancer =  compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  ); 
  return createStore(reducer, initialState, enhancer)
}
 
const store =  configureStore({});

const MyApp =  () => (
  <Provider store ={store} >
      <AppContainer />
   </Provider> 
) 

export default MyApp;


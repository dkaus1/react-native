import { combineReducers } from 'redux';
import * as recipeReducers from './recipesReducer';

export default combineReducers(Object.assign({},
	recipeReducers,
))
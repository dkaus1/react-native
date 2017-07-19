import * as types from './types';
import Api from './../lib/api';

export function addRecipe () {
	return {
		type :  types.ADD_RECIPE
	}
}

export function setSearchedRecipes ({recipes}) {
	return {
		type: types.SET_SEARCHED_RECIPES,
		recipes
	}
}

export function fetchRecipes (ingredients) {
	return (dispatch, getState) => {
		const params = [
			`i=${encodeURIComponent(ingredients)}`,
			'fillIngredients=false',
			'limitLicense=false',
			'number=20',
			'ranking=1',	
		].join('&');

		return Api.get(`?${params}`).then(resp => {
			console.log(resp);
			dispatch(setSearchedRecipes({recipes: resp}))
		}).catch((ex) => {
			console.log(ex); 
		})
	} 
}

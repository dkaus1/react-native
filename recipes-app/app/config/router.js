import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
//import {Icon} from 'react-native-elements';
import Home from '../containers/Home';


export default MyRecipes = StackNavigator({
	Home: {
		screen : Home,
		navigationOptions:{
			title: 'Recipes'
		}
	}
}) 

/*
,
		UserDetail: {
			screen: UserDetail,
			navigationOptions: {
				title: ({state}) => `${state.params.name.first.toUpperCase()} ${state.params.name.last.toUpperCase()}`
			},
		}

export const Tabs = TabNavigator({
	Feed: {
		screen : FeedStack,
		navigationOptions: {
			tabBar: {
				label: 'Feed',
				icon: ({tintColor}) =>  <Icon name="list" size={35} color={tintColor} />
			}
		}
	},
	Me: {
		screen: Me,
		navigationOptions: {
			tabBar: {
				label: 'Me',
				icon: ({tintColor}) =>  <Icon name="account-circle" size={35} color={tintColor} />
			}
		}		
	}
});

export const SettingStack = StackNavigator( {
	Settings: {
		screen: Settings
	}
})

export const Root  = StackNavigator({
	Tabs: {
		screen: Tabs
	},
	Settings: {
		screen: Settings,

	}
},{
	mode: 'modal', // appear as modal box
	headerMode: 'none', //no navigation bar will appear
})*/
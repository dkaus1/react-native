import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './containers/Home';
import Feed from './screens/Feed';
import Me from './screens/Me';
import UserDetail from './screens/UserDetail';
import Settings from './screens/Settings';

/* const stackNavigatorConfig = {
	initialRouteName: 'Home',
}; */


const FeedStack = StackNavigator({
	Feed: {
		screen: Feed,
		navigationOptions: {
			title: 'Feed',
			headerTitleStyle: { 'paddingLeft': 130 }
		}
	},
	Details: {
		screen: UserDetail,
		title: ({ state }) => `${state.params.name.first.toUpperCase()} ${state.params.name.last.toUpperCase()}`
	}
})

const TabNavigatorConfig = {
	tabBarPosition: 'bottom'
}

const Tabs = TabNavigator({
	Feed: {
		screen: FeedStack,
		navigationOptions: {
			tabBarlabel: 'Feed',
			tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
		}


	},
	Me: {
		screen: Me,
		navigationOptions: {
			tabBarlabel: 'Me',
			tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
		}
	}
}, TabNavigatorConfig)


const SettingStack = StackNavigator({
	Settings: {
		screen: Settings,
		navigationOptions: {
			title: 'Setting'
		}

	}
})

export default Root = StackNavigator({
	Tabs: {
		screen: Tabs
	},
	Settings: {
		screen: SettingStack
	}

}, {
		mode: 'modal',
		headerMode: 'none'
	})

/*export default StackNavigator({
	Home: {
		screen: Home,
	},
}, stackNavigatorConfig);
*/

import React, { Component } from 'react';
import {
	AppRegistry,
} from 'react-native';
import { Provider } from 'mobx-react';

//Provider is a component that can pass stores (or other stuff) using React's context mechanism to child components. This is useful if you have things that you don't want to pass through multiple layers of components explicitly.

import Root from './router';
import stores from './stores'

export default class mobXDemo extends Component {
	render() {
		return (
			<Provider {...stores}>
				<Root />
			</Provider >
		);
	}
}

AppRegistry.registerComponent('mobXDemo', () => mobXDemo);

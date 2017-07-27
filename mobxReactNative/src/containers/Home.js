import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { View, Text, Button, StyleSheet } from 'react-native'

@inject('counterStore')

//inject can be used to pick up those stores. It is a higher order component that takes a list of strings and makes those stores available to the wrapped component

@observer export default class Home extends Component {
	render() {
		console.log("props>>>>>", this);
		return (
			<View style={styles.container}>
				<Text>{this.props.counterStore.count}</Text>
				<Button onPress={this.handleInc.bind(this)} title="Inc">Inc </Button>
				<Button onPress={this.handleDec.bind(this)} title="Dec">Dec </Button>
			</View>
		)
	}

	@action handleDec() {
		console.log('m invoked handleDec');
		this.props.counterStore.decrement();
	}

	@action handleInc() {
		console.log('m invoked handleInc');
		this.props.counterStore.increment();
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
})
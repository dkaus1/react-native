import React,  {Component} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'; 
import {ActionCreators} from '../actions';
import Home from './Home';
import MyRecipes from '../config/router'
import {addNavigationHelpers} from 'react-navigation';

class AppContainer extends Component {

	render() {
		return (
			<MyRecipes {...this.props} />	  
		);
	}
}


const mapDispatchToProps = (disptach) => {
	return bindActionCreators(ActionCreators, disptach);
}

const mapStateToProps = (state, ownProps) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer); 
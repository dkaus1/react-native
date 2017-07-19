import React,  { Component } from 'react';
import ReactNative from 'react-native';
import {ActionCreators} from '../actions';
import {connect} from 'react-redux';

const {
	ScrollView,
	View,
	TextInput,
	Image,
	Text,
	TouchableHighlight,
	StyleSheet,
} = ReactNative

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {ingredientsInput : '', searching: false};
	}

	searchPressed() {
		this.refs.input.blur();
		console.log(this);  
		this.setState({searching:true})
		this.props.dispatch(ActionCreators.fetchRecipes(this.state.ingredientsInput)).then(() => {
			this.setState({searching:false});
		});
	} 
 
	recipes(){
		return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
	}

	render() {
		return <View style= {styles.scene}>
				<View style= {styles.searchSection}>
					<TextInput ref='input' style={styles.searchInput} 
						returnKeyType='search'
						placeholder='Ingredients (comma delimited)'
						onChangeText={(ingredientsInput) => this.setState({ingredientsInput})}
						value={this.state.ingredientsInput}
					/>
					<TouchableHighlight onPress ={ () => this.searchPressed()} style= {styles.searchButton}>
						<Text>Fetch Recipes </Text>
					</TouchableHighlight>	
				</View>
				
				<ScrollView style= {styles.scrollSection}>
					{!this.state.searching && this.recipes().map((recipe, i) => {
						return (<View key= {i}> 
								<Image source={{uri:recipe.thumbnail}} style= {styles.resultImage}/> 
								<Text style= {styles.resultText}>{recipe.title} </Text>
							</View>)	 
					})} 
					{this.state.searching ? <Text>Searching...</Text>: null} 
				</ScrollView>
					 		
			</View> 
	} 
}

const styles =  StyleSheet.create({
	scene : {
		flex: 1,
		marginTop: 20,		
	},
	searchSection: { 
		height: 30,
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		padding: 5,
		flexDirection: 'row'
	},
	scrollSection : {
		flex: 0.8
	},
	resultImage: {
		height: 150,
	},
	resultText: {
		backgroundColor: '#000',
		color: '#fff',
		height:20,
	},
	searchInput:{
	 	flex: 0.7
	},
	serachButton: {
		flex: 0.3
	}


});


const mapStateToProps = (state) => {
	return {
		searchedRecipes : state.searchedRecipes
	};
};

export default connect(mapStateToProps)(Home)
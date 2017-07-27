import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Pin extends Component {
	render() {
		return (
			<View style={styles.PinContainer}>

				<View style={styles.PinHeader}>
					<View style={styles.PinUtilityNav}>
						<Icon name='chevron-left' size={20} type='font-awesome' />
						<Icon name='heart' size={20} type='font-awesome' />
						<Icon name='share-alt' size={20} type='font-awesome' />
						<Icon name='ellipsis-h' size={20} type='font-awesome' />
					</View>
					<View style={styles.PinButtonContainer}>
						<View style={styles.PinButton}>
							<Icon name='thumb-tack' size={15} type='font-awesome' color='#fff' />
							<Text style={styles.PinButtonText}>Save</Text>
						</View>
					</View>
				</View>

				<View style={styles.PinContent}>
					<Text style={styles.ImagePlaceHolder}>Placeholder</Text>
				</View>

				<View style={styles.PinMeta}>
					<View style={styles.PinMetaTextContainer}>
						<Text style={styles.PinMetaText}>Saved from </Text>
						<Text style={[styles.PinMetaText, styles.TextBold]}>website.com</Text>
					</View>
					<View style={styles.PinButtonContainer}>
						<View style={[styles.PinButton, styles.UtilityButton]}>
							<Text style={[styles.PinButtonText, styles.UtilityButtonText]}>Visit</Text>
						</View>
					</View>
				</View>


				<View style={styles.PinUser}>
					<View style={styles.PinUserAvatar}>
					</View>
					<View style={styles.PinUserTextContainer}>
						<Text style={styles.PinUserText}>
							<Text style={styles.TextBold}>User Name </Text> saved to <Text style={styles.TextBold}> Space
							</Text>
						</Text>
						<Text style={styles.PinUserText}>Lorunnn Ipsu</Text>
					</View>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	PinContainer: {
		flex: 1,
		alignSelf: 'stretch',
	},
	PinHeader: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'flex-end', // alignItems align along y-axis
		justifyContent: 'space-between',
		flex: 1,
		padding: 5
	},
	PinUtilityNav: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex: 1,
	},
	PinButton: {
		flexDirection: 'row',
		backgroundColor: 'red',
		padding: 8,
		borderRadius: 6,
		justifyContent: 'space-between',
		width: 70,
	},
	PinButtonText: {
		color: 'white'
	},
	PinButtonContainer: {
		flex: 1,
		alignItems: 'flex-end'
	},
	PinContent: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 4,
		paddingRight: 4,
	},
	PinMeta: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 16,
		paddingRight: 8,
		paddingBottom: 16,
		paddingLeft: 8,

	},
	PinMetaTextContainer: {

	},
	UtilityButton: {
		backgroundColor: '#cecece',
		alignItems: 'center',
		justifyContent: 'center',
	},
	UtilityButtonText: {
		color: 'black',
		fontWeight: 'bold'
	},
	PinUser: {
		flex: 5,
		flexDirection: 'row',
		paddingLeft: 8,
		paddingRight: 8
	},
	PinUserAvatar: {
		width: 50,
		height: 50,
		backgroundColor: 'black',
		borderRadius: 25,
		marginRight: 8
	},
	ImagePlaceHolder: {
		backgroundColor: '#1e1e1e',
		flex: 1,
		alignSelf: 'stretch',
		borderRadius: 6,
	},
	TextBold: {
		fontWeight: 'bold'
	},

});

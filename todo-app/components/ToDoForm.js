import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import { NavigationActions } from "react-navigation";

const backAction = NavigationActions.back({
  routeName: "Home"
});

class ToDoForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onChange = this.onChange.bind(this);
    this.onAddPressed = this.onAddPressed.bind(this);
  }

  onChange(text) {
    console.log("todo<<<<", text);
    this.task = text;
  }

  onAddPressed() {
    console.log("m clicked", this.task);
    console.log(this);
    //	this.parent.setState({ todos :  }); // To trigger render.
    this.props.navigation.state.params.handler(this.task);
    this.props.navigation.goBack();
    //this.props.navigation.navigate('Home',this.task)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.onChange}
          style={styles.input}
          placeholder="ADD TODO"
        />
        <TouchableHighlight style={styles.button} onPress={this.onAddPressed}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.cancelButton]}
          onPress={() => this.props.navigation.dispatch(backAction)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 150,
    backgroundColor: "#F7F7F7"
  },
  input: {
    borderWidth: 1,
    borderColor: "#D7D7D7",
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FAFAFA"
  },
  button: {
    height: 45,
    alignSelf: "stretch",
    backgroundColor: "#05A5D1",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  cancelButton: {
    backgroundColor: "#666"
  }
});

export default ToDoForm;

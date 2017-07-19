import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

class TaskRow extends React.Component {
  onDonePressed(todo) {
    console.log(todo);
    this.props.onDone(this.props.todo);
  }
  render() {
    {
      console.log("props>>>>", this.props.todo);
    }
    const todoStatus = null;
    if (this.props.todo.task.state === "pending") {
      todoStatus = (
        <TouchableHighlight
          style={styles.doneButton}
          onPress={this.onDonePressed.bind(this)}
        >
          <Text>Done </Text>
        </TouchableHighlight>
      );
    } else {
      todoStatus;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          {this.props.todo.task}
        </Text>
        {todoStatus}
      </View>
    );
  }
}

TaskRow.propTypes = {
  onDone: React.PropTypes.func.isRequired,
  todo: React.PropTypes.shape({
    task: React.PropTypes.string.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E7E7E7",
    padding: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  label: {
    fontSize: 20,
    fontWeight: "200"
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: "#EAEAEA",
    padding: 5
  }
});

export default TaskRow;

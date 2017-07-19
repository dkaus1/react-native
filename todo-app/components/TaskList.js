import React from "react";
import {
  View,
  ListView,
  StyleSheet,
  TouchableHighlight,
  Text,
  Switch
} from "react-native";
import TaskRow from "./TaskRow";

class TaskList extends React.Component {
  static navigationOptions = {
    title: "TODO Form"
  };
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    };
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("i am in props");
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
    this.setState({ dataSource });
  }
  renderRow(todo) {
    return <TaskRow todo={todo} onDone={this.props.onDone} />;
  }

  onAdd() {
    console.log("m in tasklist");
  }

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.toggleRow}>
          <Switch
            onValueChange={this.props.onToggle}
            style={styles.toggleSwitch}
            value={this.props.filter !== "pending"}
          />
          <Text style={styles.toggleText}>
            Showing {this.props.todos.length} {this.props.filter} todo(s)
          </Text>
        </View>
        <ListView
          key={this.props.v}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() =>
            this.props.navigate("TodoForm", {
              handler: this.props.handler.bind(this)
            })}
        >
          <Text style={styles.buttonText}> Add One </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskList.propTypes = {
  onDone: React.PropTypes.func.isRequired,
  filter: React.PropTypes.string.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onToggle: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  },
  button: {
    height: 60,
    borderColor: "#0515d1",
    borderWidth: 2,
    backgroundColor: "#333",
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#FAFAFA",
    fontSize: 20,
    fontWeight: "600"
  },
  toggleRow: {
    flexDirection: "row",
    padding: 10
  },
  toggleText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 3
  }
});
export default TaskList;

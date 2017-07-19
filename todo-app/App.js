import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import TaskList from "./components/TaskList";
import TodoForm from "./components/ToDoForm";
import { StackNavigator } from "react-navigation";
import store from "./todoStore";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
    this.handler = this.handler.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onDone(todo) {
    /*const filteredToDos = this.state.todos.filter(filterTodo => {
      return filterTodo != todo;
    });
    //this.state.todos.pop({task: todo});
    this.setState({
      todos: filteredToDos
    }); */
    store.dispatch({
      type: "DONE_TODO",
      todo
    });
  }

  handler(task) {
    console.log("parent method invoked", task);
    //this.state.todos.push(task);
    // this.setState({
    //   todos: this.state.todos
    // });
    store.dispatch({
      type: "ADD_TODO",
      task
    });
    console.log("todos", this.state.todos);
  }

  onToggle() {
    store.dispatch({
      type: "TOGGLE_STATE"
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TaskList
          handler={this.handler}
          onToggle={this.onToggle}
          filter={this.state.filter}
          todos={this.state.todos}
          navigate={navigate}
          onDone={this.onDone}
        />
      </ScrollView>
    );
  }
}

const routesConfig = {
  Home: { screen: App },
  TodoForm: {
    screen: TodoForm,
    navigationOptions: {
      title: "Add ToDo Item"
    }
  }
};

const TODoApp = StackNavigator(routesConfig, { initialRouteName: "Home" });
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#F7F7F7",
    flex: 1,
    justifyContent: "flex-start"
  }
});

export default TODoApp;

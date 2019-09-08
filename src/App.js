import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Form, Control } from "react-redux-form";

class App extends React.Component {
  handleSubmit = todo => {
    this.props.addTodo(todo);
  };

  render() {
    return (
      <div>
        <p>Todos</p>
        {this.props.todos.map(todo => (
          <li key={todo.id}>{todo.description}</li>
        ))}
        <Form model="todo" onSubmit={this.handleSubmit}>
          <Control.text model="todo"></Control.text>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("redux store: ", state);
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => ({
  addTodo: todo => {
    dispatch({ type: "ADD_TODO", payload: todo });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

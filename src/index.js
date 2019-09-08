import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createForms } from "react-redux-form";

const todos = (
  state = [
    { id: 1, description: "walk the dog" },
    { id: 2, description: "walk the cat" },
    { id: 3, description: "walk the pig" }
  ],
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: state.length + 1, description: action.payload }];
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    todos,
    ...createForms({
      todo: ""
    })
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

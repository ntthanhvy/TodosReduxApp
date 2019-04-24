import React, { Component } from "react";
// import { AppRegistry } from "react-native";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <TodoApp />
//       </Provider>
//     );
//   }
// }

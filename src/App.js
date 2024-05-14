// App.js
import React from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;

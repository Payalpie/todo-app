// components/TodoList.js
import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const TodoList = ({ todos, toggleTodo }) => {
  console.log("todos", todos);
  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.completed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="40px"
                width="40px"
              >
                <path
                  fill="#33658a"
                  d="M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM9.69,16.69a1,1,0,0,1-1.4,0l-4-4a1,1,0,1,1,1.4-1.42L9,14.58l9.31-9.3a1,1,0,1,1,1.4,1.42Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="40px"
                width="40px"
              >
                <path
                  fill="#33658a"
                  d="M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM5,19V5H19V19Z"
                />
              </svg>
            )}
            <div>
              <h5>{todo.title}</h5>
              <p>{todo.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.sort((a, b) => {
      // First, sort by completion status
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      // Then, if both are completed or both are not completed, sort by timestamp in descending order
      return b.timestamp - a.timestamp;
    }),
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

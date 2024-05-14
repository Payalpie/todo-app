import { generateUniqueId } from "../reducers/todos";

export const addTodo = ({ title, description }) => ({
  type: "ADD_TODO",
  payload: {
    id: generateUniqueId(),
    title,
    description,
    completed: false,
    timestamp: Date.now(),
  },
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: { id },
});

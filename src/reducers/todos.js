// reducers/todos.js
export const generateUniqueId = () => {
  // Generate a unique identifier using current timestamp and random number
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};

const initialState = [
  {
    id: generateUniqueId(),
    title: "Finish homework",
    description: "Complete all assignments for math and science classes",
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: generateUniqueId(),
    title: "Buy groceries",
    description: "Milk, eggs, bread, and fruits",
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: generateUniqueId(),
    title: "Call mom",
    description: "Discuss plans for the weekend",
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: generateUniqueId(),
    title: "Go for a run",
    description: "Jog around the park for 30 minutes",
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: generateUniqueId(),
    title: "Read book",
    description: "Read chapter 5 of 'The Great Gatsby'",
    completed: false,
    timestamp: Date.now(),
  },
];

const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todos;

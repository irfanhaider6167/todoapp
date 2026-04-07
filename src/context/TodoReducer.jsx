const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "EDIT_TODO":
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === Number(action.payload.id)
            ? { ...item, ...action.payload }
            : item,
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    case "STATUS_TODO":
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item,
        ),
      };
    default:
      return state;
  }
};

export default reducer;

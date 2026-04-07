import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./TodoReducer";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const initialState = {
    todos: (() => {
      const save = localStorage.getItem("todo");
      return save ? JSON.parse(save) : [];
    })(),
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const addtodoData = (rowData) => {
    return dispatch({ type: "ADD_TODO", payload: rowData });
  };
  const editData = (rowData, numericId) => {
    console.log(numericId);
    return dispatch({
      type: "EDIT_TODO",
      payload: { id: numericId, ...rowData },
    });
  };
  const del = (id) => {
    return dispatch({
      type: "DELETE_TODO",
      payload: { id: id },
    });
  };
  const statusChange = (check) => {
    return dispatch({ type: "STATUS_TODO", payload: { id: check } });
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state.todos));
  }, [state.todos]);
  return (
    <AppContext.Provider
      value={{ state, addtodoData, editData, del, statusChange }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

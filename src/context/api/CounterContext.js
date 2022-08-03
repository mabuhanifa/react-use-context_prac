import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = { count: 0, todo: [] };
const countReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "incrementBy":
      return { ...state, count: state.count + payload };

    case "todo":
      return { ...state, todo: payload };
    default:
      return state;
  }
};
export const CounterContext = createContext(initialState);

export const CounterProvider = (props) => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const increment = () => {
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrement",
    });
  };
  const incrementBy = (payload) => {
    dispatch({
      type: "incrementBy",
      payload: payload,
    });
  };

  const todo = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({
      type: "todo",
      payload: res.data,
    });
  };
  useEffect(() => {
    todo();
  }, []);
  const store = {
    count: state.count,
    todo: state.todo,
    increment,
    decrement,
    incrementBy,
  };
  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("ShopContext is undefined");
  }
  return context;
};

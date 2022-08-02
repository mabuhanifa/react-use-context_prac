import { createContext } from "react";
const initialState = {
  count: 50,
};
export const CounterContext = createContext(initialState);

export const CounterProvider = (props) => {
  return (<CounterContext.Provider value={initialState}>
    {props.children}
    </CounterContext.Provider>);
};

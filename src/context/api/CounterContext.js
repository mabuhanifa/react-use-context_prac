import { createContext } from "react";
const initialState = {
  count: 0,
};
export const CounterContext = createContext(initialState);

export const CounterProvider = (props) => {
  return (<CounterContext.Provider>
    {props.children}
    </CounterContext.Provider>);
};

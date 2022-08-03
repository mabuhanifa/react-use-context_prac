import { createContext, useState } from "react";

const count= [52,50];


export const CounterContext = createContext(count);

export const CounterProvider = (props) => {
  const [state, setState] = useState(count);
  const store = {
    state,
    setState,
  };
  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
};

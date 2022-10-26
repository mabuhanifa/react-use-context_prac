import { createContext, useReducer } from "react";
import { storeReducer } from "../reducer/storeReducer";

const StoreContext = createContext();
const initialState = {
  products: [],
  cart: [],
};
export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const store = { state, dispatch };
  return (
    <StoreContext.Provider store={store}>{children}</StoreContext.Provider>
  );
};

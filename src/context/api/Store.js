import { createContext, useContext, useReducer } from "react";
import { storeReducer } from "../reducer/storeReducer";

const StoreContext = createContext();
const initialState = {
  products: [],
  cart: [0],
  counter: 0,
};

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const store = { state, dispatch };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("context is not found");
  }
  return context;
};

export const useDispatch = () => {
  return useContext(StoreContext).dispatch;
};

export const useSelector = (fn) => {
  const { state } = useContext(StoreContext);
  const selector = fn ? fn(state) : state;
  return selector;
};

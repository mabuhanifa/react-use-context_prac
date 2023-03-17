import { useEffect } from "react";
import { useDispatch, useStore } from "./context/api/Store";
import { data } from "./data";

function App() {
  const dispatch = useDispatch();
  const {
    state: { products, counter },
  } = useStore();
  const add = () => {
    dispatch({ type: "add" });
  };
  useEffect(() => {
    const fetchData = () => {
      dispatch({
        type: "fetchData",
        payload: data,
      });
    };
    fetchData();
  }, [dispatch]);
  
  console.log(dispatch);

  return (
    <div style={{ margin: "100px" }}>
      <div>{counter}</div>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;

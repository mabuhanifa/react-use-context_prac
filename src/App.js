import { useEffect } from "react";
import { useStore } from "./context/api/Store";
import { data } from "./data";

function App() {
  const {
    state: { products, counter },
    dispatch,
  } = useStore();
  const add = () => {
    dispatch({ type: "add" });
  };
  console.log(products);
  useEffect(() => {
    const fetchData = () => {
      dispatch({
        type: "fetchData",
        payload: data,
      });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div style={{ margin: "100px" }}>
      <div>{counter}</div>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;

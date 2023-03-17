import { useDispatch, useSelector } from "./context/api/Store";

function App() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const custom = (type) => {
    dispatch({
      type: type,
    });
  };
  return (
    <div style={{ margin: "100px" }}>
      <div>{counter}</div>
      <button onClick={() => custom("add")}>+</button>
      <button onClick={() => custom("reduce")}>-</button>
    </div>
  );
}

export default App;

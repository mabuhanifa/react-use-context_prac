import { useDispatch, useSelector } from "./context/api/Store";

function App() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  return (
    <div style={{ margin: "100px" }}>
      <div>{counter}</div>
      <button
        onClick={() =>
          dispatch({
            type: "add",
          })
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reduce",
          })
        }
      >
        -
      </button>
    </div>
  );
}

export default App;

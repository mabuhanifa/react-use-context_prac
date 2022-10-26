import { useStore } from "./context/api/Store";

function App() {
  const {
    state: { counter },
    dispatch,
  } = useStore();
  const add = () => {
    dispatch({ type: "add" });
  };
  return (
    <div style={{ margin: "100px" }}>
      <div>{counter}</div>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;

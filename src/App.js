import { useDispatch, useSelector } from "./context/api/Store";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div style={{ margin: "100px" }}>
      <div></div>
    </div>
  );
}

export default App;

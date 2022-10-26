import { useStore } from "./context/api/Store";

function App() {
  const {state,dispatch} = useStore();
  console.log(state,dispatch);
  return (
    <div>
      <div>store</div>
    </div>
  );
}

export default App;

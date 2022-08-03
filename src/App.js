import { useContext, useEffect } from "react";
import { CounterContext } from "./context/api/CounterContext";

function App() {
  const { state, setState } = useContext(CounterContext);
  console.log(state, setState);

  const value = state.reduce((v, t) => Number(v) + Number(t), 0);
  useEffect(() => {
    
  }, [state]);
  const product = 32;
  const addToCart = (product) => {
    setState([...state,product]);
  };
  return (
    <div style={{ margin: "100px" }}>
      <h2>Total Item Selected :{state?.length}</h2>
      <h2>Total Price:{value}</h2>

      <button onClick={() => addToCart(product)}>Add</button>

      <h2>{}</h2>
    </div>
  );
}

export default App;

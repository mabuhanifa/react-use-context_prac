import { useContext } from "react";
import { CounterContext } from "./context/api/CounterContext";

function App() {
  const { count } = useContext(CounterContext);
  console.log(count);

  return (
    <div style={{ margin: "100px" }}>
      {/* <h2>Total Item Selected :{products.length}</h2>
      <h2>Total Price:{total}</h2>
      {data.map((product) => {
        return (
          <div style={{ border: "1px solid gray" }}>
            <h1>{product.name}</h1>
            <button onClick={() => addToCart(product)}>Add</button>
          </div>
        );
      })} */}
      <h2>{count}</h2>
    </div>
  );
}

export default App;

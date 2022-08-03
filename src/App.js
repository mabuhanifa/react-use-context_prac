import { useCounter } from "./context/api/CounterContext";

function App() {
  const count = useCounter();
  //console.log(state, setState);
  console.log(count);

  // const value = state.reduce((v, t) => Number(v) + Number(t), 0);
  // useEffect(() => {

  // }, [state]);
  // const product = 32;
  // const addToCart = (product) => {
  //   setState([...state,product]);
  // };
  return (
    <div style={{ margin: "100px" }}>
      {/* <h2>Total Item Selected :{state?.length}</h2>
      <h2>Total Price:{value}</h2>

      <button onClick={() => addToCart(product)}>Add</button>

      <h2>{}</h2> */}
    </div>
  );
}

export default App;

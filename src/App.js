import { useCounter } from "./context/api/CounterContext";

function App() {
  const { count, increment, decrement, incrementBy } = useCounter();
  //console.log(state, setState);
  console.log(count);

  // const value = state.reduce((v, t) => Number(v) + Number(t), 0);
  // useEffect(() => {

  // }, [state]);
  // const product = 32;
  // const addToCart = (product) => {
  //   setState([...state,product]);
  // };
  const incrementByVal = (e) =>{
    e.preventDefault();
    incrementBy(Number(e.target.val.value))
  }
  return (
    <div style={{ margin: "100px" }}>
      {/* <h2>Total Item Selected :{state?.length}</h2>
      <h2>Total Price:{value}</h2>

      <button onClick={() => addToCart(product)}>Add</button>

      <h2>{}</h2> */}
      <h2>{count}</h2>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <form onSubmit={incrementByVal}>
        <input type="number" name="val"/>
        <input type="submit" value="value"/>
      </form>
    </div>
  );
}

export default App;

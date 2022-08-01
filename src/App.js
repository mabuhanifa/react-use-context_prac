import { useState } from "react";
import { data } from "./data";

function App() {
  // const { total, products, addToCart, removeFromCart } = useShop();
  // console.log(total, products);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  console.log(cart);
  return (
    <div style={{ margin: "100px" }}>
      <h2>Total Item Selected :{cart.length}</h2>
      <h2>
        Total Price:
        {cart.reduce((t, cart) => {
          return t + cart.price;
        }, 0)}
      </h2>
      {data.map((product) => {
        return (
          <div style={{ border: "1px solid gray" }}>
            <h1>{product.name}</h1>
            <button onClick={() => addToCart(product)}>Add</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

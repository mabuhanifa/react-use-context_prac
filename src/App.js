import useShop from "./context/api/ShopContext";
import { data } from "./data";

function App() {
  const { total, products, addToCart, removeFromCart } = useShop();
  console.log(total, products);
  return (
    <div style={{ margin: "100px" }}>
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

import Counter from "./Counter";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
function App() {
  return (
    <div>
      <h1>React Debugging</h1>
      <Counter />
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>React Debugging</h1>
      <ProductList />
    </div>
  );
}
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map(p => <p key={p._id}>{p.name} - ${p.price}</p>)}
    </div>
  );
}

export default App;
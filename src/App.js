import Main from "./components/Main";
import Basket from "./components/Basket";
import { useState } from "react";

function App() {
  
  const products = 
     [
      {
        id: "1",
        product_id: "mss",
        name: "management Security Services",
        price: 2549.99,
      
      },
      {
        id: "2",
        product_id: "e&i",
        name: "Engineering And Integration",
        price: 1025.50,
        
      },
      {
        id: "3",
        product_id: "training",
        name: "Training",
        price: 100,
       
      }
    ]
  
 
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <center>
        <h3>CheckOut Cart</h3>
      </center>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;

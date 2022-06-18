import React from "react";

export default function Main(props) {
  const { products, onAdd } = props;

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
         <div>
            <h3>{product.product_id}</h3>
        <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
      
         </div> 
        ))}
      </div>
    </main>
  );
}

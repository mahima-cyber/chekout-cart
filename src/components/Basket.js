import React, { useState } from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
  const promocode1 = 5000;
  const promocode2 = 10000;
  const [promoprice, setPromoPrice] = useState(0);
  const discount = itemsPrice - promoprice

  
  return (
    <div className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>

            <div className="row">
              <div className="col-2">
                <b>1.PROMO CODE:</b>
              </div>
              <div className="col-1 text-right">RRD4D32</div>
            </div>
            <div className="row">
              <div className="col-2">
                <b>DESCRIPTION:</b> "10% discount for orders above $5000
                (pre-discount)"
              </div>
              <div className="col-1 text-right">
                <button onClick={()=> {totalPrice > promocode1 ?  setPromoPrice((10 / 100) * totalPrice): alert("Invalid Coupon Code")} }>Apply</button>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <b>2.PROMO CODE:</b>
              </div>
              <div className="col-1 text-right">44F4T11</div>
            </div>
            <div className="row">
              <div className="col-2">
                <b>DESCRIPTION:</b> "15% discount for orders above $10000
                (pre-discount)"
              </div>
              <div className="col-1 text-right">
              <button onClick={()=> {totalPrice > promocode2 ?  setPromoPrice((15 / 100) * totalPrice): alert("Invalid Coupon")} }>Apply</button>
                
                
                </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Promotion</div>
              <div className="col-1 text-right">${promoprice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{ promoprice > 0 ? discount.toFixed(2) : totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row"></div>
          </>
        )}
      </div>
    </div>
  );
}

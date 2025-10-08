import React, { useState } from "react";

// Child component: displays the total items
const CartSummary = ({ cart }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}>
      <h3>Cart Summary</h3>
      <p>Total items in cart: <strong>{cart.length}</strong></p>
    </div>
  );
};

// Child component: displays each item
const CartItems = ({ cart }) => {
  return (
    <div style={{ border: "1px solid #aaa", padding: "1rem", marginTop: "1rem" }}>
      <h3>Cart Items</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Parent component: manages the cart
const PropDrilling = () => {
  const [cart, setCart] = useState(["Apple", "Banana"]);

  const addItem = () => {
    const newItem = prompt("Enter item name:");
    if (newItem) setCart([...cart, newItem]);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Shopping Cart Example (Prop Drilling)</h1>
      <button onClick={addItem}>Add Item</button>

      {/* Passing cart data down to children */}
      <CartItems cart={cart} />
      <CartSummary cart={cart} />
    </div>
  );
};

export default PropDrilling;

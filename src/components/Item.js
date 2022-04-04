import React, { useState } from "react";

function Item({ name, category }) {

    const [inCart, SetinCart] = useState(false)

    function handleAddtoCart() {
        SetinCart((inCart) => !inCart);
    }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleAddtoCart}>{inCart ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;

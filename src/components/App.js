import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [DarkModeisOn, setDarkModeIsOn] = useState(false)

  function handleClick() {
      setDarkModeIsOn((DarkModeisOn) => !DarkModeisOn);
  }

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);


  return (
    <div className={"App " + (DarkModeisOn ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{DarkModeisOn ? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

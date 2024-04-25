import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Initialize selectedCategory state

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function onCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  const filteredItems =
    selectedCategory === "all"
      ? itemData
      : itemData.filter((item) => item.category === selectedCategory);

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <Filter onCategoryChange={onCategoryChange} />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;

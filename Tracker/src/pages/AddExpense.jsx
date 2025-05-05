import React, { useState } from "react";
import ToolBar from "../components/ToolBar";

function AddExpense() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    "🛒Products",
    "🚌Transport",
    "⚽Entertainment",
    "👗Clothing and shoes",
    "🏥Medicine",
    "📰Utilities and Internet",
    "📨Other",
  ];
  const [inputValue, setInputValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown">
        <button onClick={toggleDropdown}>Категорії</button>
        {isOpen && (
          <ul className="dropdown-list">
            {items.map((item, index) => (
              <li className="category" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
        <p>Введено/Вибрано: {inputValue}</p>{" "}
      </div>
      <ToolBar />
    </>
  );
}

export default AddExpense;

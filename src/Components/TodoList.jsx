import React, { useState } from "react";
import "./TodoList.css"; 

const TodoList = () => {
  const [inputText, setInputText] = useState("");
  const [names, setNames] = useState([]);

  const handleEnterClick = () => {
    if (inputText.trim() !== "") {
      setNames((prevNames) => [...prevNames, inputText]);
      setInputText("");
    }
  };

  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter a name..."
          className="input-field"
        />
        <button onClick={handleEnterClick} className="enter-button">
          Enter
        </button>
      </div>

      <div className="list-container">
        {names.map((name, index) => (
          <div key={index} className="name-item">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

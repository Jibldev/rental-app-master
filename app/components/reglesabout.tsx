import React, { useState } from "react";
import "app/styles/reglesabout.sass"


const Dropdown = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" >
      <div className="dropdown-header" onClick={toggleDropdown} >
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
      </div>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
};

export default Dropdown;

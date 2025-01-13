import React, { useState } from "react";
import "app/styles/reglesabout.sass";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Dropdown = ({ title, content }: { title: string; content: string | string[] }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h3>{title}</h3>
        <span className={`arrow fa fa-chevron-up ${isOpen ? "rotate" : ""}`}></span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

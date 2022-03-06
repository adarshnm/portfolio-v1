import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const onMenuIconClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar__head">
        <div className="navbar__logo-bar">
          <span className="navbar__logo navbar__logo--bold">Adarsh</span>
          <span className="navbar__logo">Mohan</span>
        </div>
        <button
          type="button"
          className={`navbar__menu-icon ${
            isMenuVisible ? `navbar__menu-icon--active` : ``
          }`}
          onClick={onMenuIconClick}
        >
          <div className="content" />
        </button>
      </div>
      <div
        className={`navbar__items ${
          isMenuVisible ? `navbar__items--visible` : ``
        }`}
      >
        <ul>
          <li className="navbar__link">About</li>
          <li className="navbar__link">Passions</li>
          <li className="navbar__link">Portfolio</li>
          <li className="navbar__link">Portfolio</li>
        </ul>
      </div>
    </nav>
  );
}

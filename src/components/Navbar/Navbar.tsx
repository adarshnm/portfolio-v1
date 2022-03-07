import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const onMenuIconClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuVisible]);

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

      <ul
        className={`navbar__items ${
          isMenuVisible ? `navbar__items--visible` : ``
        }`}
      >
        <li className="navbar__list-item">
          <a href="#about" className="navbar__link">
            About
          </a>
        </li>
        <li className="navbar__list-item">
          <a href="#passions" className="navbar__link">
            Passions
          </a>
        </li>
        <li className="navbar__list-item">
          <a href="#portfolio" className="navbar__link">
            Portfolio
          </a>
        </li>
        <li className="navbar__list-item">
          <a href="#contact" className="navbar__link navbar__btn">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

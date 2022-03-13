import React, { useEffect, useState } from 'react';
import COMMON from '@/constants/common.constants';
import NAVLINKS from '@/constants/links.constants';

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [size, setSize] = useState<ISize>({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onMenuIconClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    if (size.width > COMMON.MENUBAR_VISIBLE_MAX_SIZE && isMenuVisible) {
      setIsMenuVisible(false);
    }
  }, [isMenuVisible, size.width]);

  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuVisible]);

  const onLinkClick = () => {
    setIsMenuVisible(false);
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

      <ul
        className={`navbar__items ${
          isMenuVisible ? `navbar__items--visible` : ``
        }`}
      >
        {NAVLINKS.map(({ text, id, isButton }) => (
          <li key={id} className="navbar__list-item">
            <a
              href={`#${id}`}
              className={`navbar__link ${isButton && 'navbar__btn'}`}
              onClick={onLinkClick}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

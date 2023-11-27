import { useState } from 'react';
import '../styles/HamburgerMenu.scss';

export default function HamburgerMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    document.body.classList.toggle('no-scroll');
    setIsOpen(!isOpen);
  };

  return (
    <section className={`hamburger ${isOpen ? 'hamburger--open' : ''}`}>
      <button className="hamburger__button" onClick={handleClick}>
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-xmark'}`} aria-hidden="true"></i>
        <span className="fa-sr-only">Toggle menu</span>
      </button>
      <section className="hamburger__children">{children}</section>
    </section>
  );
}

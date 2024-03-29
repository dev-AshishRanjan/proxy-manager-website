import './style.css';
import { useState } from 'react';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <div className={`navbar ${scrolled ? 'nav-down' : null}`}>
      <a href="/" className="nav-logo">
        Proxy Manager
      </a>
      <div className="navLinks">
        <p className="nav-item" onClick={() => scrollToElement('home')}>
          Home
        </p>
        <p className="nav-item" onClick={() => scrollToElement('about')}>
          About
        </p>
        <p className="nav-item" onClick={() => scrollToElement('downloads')}>
          Downloads
        </p>
        <p className="nav-item" onClick={() => scrollToElement('notice')}>
          Notice
        </p>
      </div>
      <a
        href="https://github.com/dev-AshishRanjan/proxy-manager"
        target="_blank"
      >
        <img
          width="50"
          height="50"
          src={`https://img.icons8.com/clouds/500/github.png`}
          alt={`more`}
          className="icons-img"
        />
      </a>
    </div>
  );
};

export default Navbar;

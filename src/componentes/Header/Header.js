import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import logo from '../../images/logo.png'
import MenuMobile from '../MenuMobile';
import DynamicMenu from './DynamicMenu';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }

  return (
    <>
      <Default>
        <header className={`header-desktop ${scrolled ? 'scrolled' : ''}`}>
          <div className="header-container">
            <div className="logo-container">
              <a href="/">
                <img
                  alt="Marta Oliveda Photography"
                  src={logo}
                  className="header-logo"
                />
              </a>
            </div>
            <nav className="nav-menu">
              <DynamicMenu 
                className="header-menu"
                style={{ 
                  background: 'transparent',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              />
            </nav>
          </div>
        </header>
      </Default>
      <Mobile>
        <MenuMobile />
      </Mobile>
    </>
  )
}
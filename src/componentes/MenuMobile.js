import React, { useState } from 'react';
import './styles/styleMenuMobile.css';
import Hamburger from './Header/Hamburguer';
import styled from 'styled-components';
import logo from '../images/logo.png'

function MenuMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    const MobileNavToggle = styled.button`
        display: block;
        background-color: transparent;
        border: none;
        color: #000000;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1001;
        padding: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

        &:hover {
            color: #F684FF;
            transform: scale(1.1);
        }

        @media (min-width: 768px) {
            display: none;
        }
    `;

    const MobileHeader = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

        @media (min-width: 768px) {
            display: none;
        }
    `;

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        // Prevenir scroll cuando el menú está abierto
        if (!menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <MobileHeader>
                <a href="/">
                    <img 
                        alt="Marta Oliveda Photography" 
                        src={logo} 
                        style={{ maxHeight: "40px", width: "auto" }}
                    />
                </a>
            </MobileHeader>
            
            <MobileNavToggle onClick={handleMenuToggle}>
                <Hamburger isOpen={menuOpen} />
            </MobileNavToggle>
            
            <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <ul className="mobile-menu-list">
                        <li>
                            <a href="/" onClick={handleMenuItemClick}>
                                <i className="menu-icon">🏠</i>
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/sobre-mi" onClick={handleMenuItemClick}>
                                <i className="menu-icon">👤</i>
                                Sobre Mí
                            </a>
                        </li>
                        <li>
                            <a href="/sesiones" onClick={handleMenuItemClick}>
                                <i className="menu-icon">📸</i>
                                Sesiones
                            </a>
                        </li>
                        <li>
                            <a href="/contacto" onClick={handleMenuItemClick}>
                                <i className="menu-icon">📞</i>
                                Contacto
                            </a>
                        </li>
                        <li>
                            <a href="/productos" onClick={handleMenuItemClick}>
                                <i className="menu-icon">🛍️</i>
                                Productos
                            </a>
                        </li>
                    </ul>
                    
                    <div className="mobile-menu-footer">
                        <p>Marta Oliveda Photography</p>
                        <p>Capturando momentos especiales</p>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default MenuMobile;

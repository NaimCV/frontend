import React, { useState } from 'react';
import './styles/styleMenuMobile.css'; // Archivo CSS para estilos
import Hamburger from './Header/Hamburguer';
import styled from 'styled-components';
import logo from '../images/logo.png'

function MenuMobile() {
    const [menuOpen, setMenuOpen] = useState(false)

    const MobileNavToggle = styled.button`
        display: block;
        background-color: transparent;
        border: none;
        color: #000000;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            color: #F684FF;
        }

        @media (min-width: 768px) {
            display: none;
        }
        `;

    return (
        <div className={`container ${menuOpen ? 'menu-open' : ''}`}>
            <div><a href="/"><img alt="logo" src={logo} style={{ maxWidth: "33%", marginTop: "20px" }}/></a></div>
            <MobileNavToggle className="menu-toggle hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <Hamburger/> : <Hamburger/>}
            </MobileNavToggle>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
            <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/sobre-mi">Sobre Mí</a></li>
            <li><a href='/sesiones'>Sesiones</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/productos">Productos</a></li>
            </ul>
        </nav>
        </div>
    );
}

export default MenuMobile;

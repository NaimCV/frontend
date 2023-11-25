import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { ContactsOutlined, HomeOutlined, CameraOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import styled from 'styled-components';
import Hamburger from './Hamburguer';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  color: #fff;
  padding: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #000000;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #F684FF;
    }
  }
`;

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

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const items = [
    {
      label: (
        <a href="/">
          Inicio
        </a>
      ),
      key: 'inicio',
      icon: <HomeOutlined />,
    },
    {
      label: (
        <a href="/sobre-mi">
          Sobre mí
        </a>
      ),
      key: 'sobre-mi'
    },
    {
      label: 'Sesiones',
      key: 'sesiones',
      icon: <CameraOutlined />,
      children: [
        {
          type: 'group',
          label: (
            <a href="/sesiones/maternidad">
              Maternidad
            </a>
          )
        },
        {
          type: 'group',
          label: (
            <a href="/sesiones/newborn">
              Newborn
            </a>
          )
        },
        {
          type: 'group',
          label: (
            <a href="/sesiones/seguimiento">
              Seguimiento
            </a>
          )
        },
        {
          type: 'group',
          label: (
            <a href="/sesiones/cake-smash">
              Cake-Smash
            </a>
          )
        }
      ],
    },
    {
      label: (
        <a href="/contacto">
          Contacto
        </a>
      ),
      key: 'contacto',
      icon: <ContactsOutlined />,
    },
    {
      label: (
        <a href="/productos">
          Productos
        </a>
      ),
      key: 'productos',
      icon: <ContactsOutlined />,
    },
  ]
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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <a href="/">
            <img
              alt="logo"
              src="https://oliveda-photography.es/wp-content/uploads/2023/10/logo.png"
              style={{ maxWidth: "25%" }}
            />
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <div>
            <Menu mode="horizontal" items={items} style={{ width: "100%", padding: "0 20px" }}/>
          </div>
        </div>
      </div>
    </Default>
    <Mobile>
      <Nav>
        <div><a href="/"><img alt="logo" src="https://oliveda-photography.es/wp-content/uploads/2023/10/logo.png" style={{ maxWidth: "25%" }}/></a></div>
          <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
          {isMobileNavOpen ? <Hamburger/> : <Hamburger/>}
        </MobileNavToggle>
        <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
          <NavItem><a href="/">Inicio</a></NavItem>
          <NavItem><a href="/sobre-mi">Sobre Mí</a></NavItem>
          <NavItem><a href='/sesiones'>Sesiones</a></NavItem>
          <NavItem><a href="/contacto">Contacto</a></NavItem>
        </MobileNav>
      </Nav>
    </Mobile>
    </>
  )
}
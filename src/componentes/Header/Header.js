import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { ContactsOutlined, HomeOutlined, CameraOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import logo from '../../images/logo.png'
import MenuMobile from '../MenuMobile';


export default function Header() {
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
            <a href="/sesiones/revelacion-sexo">
              Revelación del sexo
            </a>
          )
        },
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
              src={logo}
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
      <MenuMobile/>
    </Mobile>
    </>
  )
}
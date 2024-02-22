import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'

export default function MenuDesktop () {
  return (
        <>
            <Menu mode="horizontal">
                <NavLink to="/">
                    <Menu.Item>Inicio</Menu.Item>
                </NavLink>
                <NavLink to="/sobre-mi">
                    <Menu.Item>Sobre Mí</Menu.Item>
                </NavLink>
                <NavLink to="/contacto">
                    <Menu.Item>Contacto</Menu.Item>
                </NavLink>
                <NavLink to="/sesiones">
                    <Menu.SubMenu title="Sesiones">
                        <NavLink to="/sesiones/revelacion-sexo">
                            <Menu.Item>Revelación del sexo</Menu.Item>
                        </NavLink>
                        <NavLink to="/sesiones/maternidad">
                            <Menu.Item>Maternidad</Menu.Item>
                        </NavLink>
                        <NavLink to="/sesiones/newborn">
                            <Menu.Item>Newborn</Menu.Item>
                        </NavLink>
                        <NavLink to="/sesiones/seguimiento">
                            <Menu.Item>Seguimiento</Menu.Item>
                        </NavLink>
                        <NavLink to="/sesiones/cake-smash">
                            <Menu.Item>Cake Smash</Menu.Item>
                        </NavLink>
                        <NavLink to="/sesiones/bath-milk">
                            <Menu.Item>Bath Milk</Menu.Item>
                        </NavLink>
                        <NavLink to="/sesiones/bakery">
                            <Menu.Item>Bakery</Menu.Item>
                        </NavLink>
                        <NavLink to="/sesiones/hoy-me-toca-a-mi">
                            <Menu.Item>Hoy me toca a mí</Menu.Item>
                        </NavLink>
                    </Menu.SubMenu>
                </NavLink>
                <NavLink to="/productos">
                    <Menu.Item>Productos</Menu.Item>
                </NavLink>
            </Menu>
        </>
  )
}

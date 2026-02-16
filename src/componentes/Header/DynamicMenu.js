import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, ContactsOutlined, CameraOutlined, ShoppingOutlined } from '@ant-design/icons';
import axios from 'axios';

const DynamicMenu = ({ className, style }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // Intentar obtener el menú del header desde la API
        const response = await axios.get('http://localhost:5000/api/menus/location/header');
        
        if (response.data && response.data.items) {
          const itemsWithUrls = response.data.items;

          const items = itemsWithUrls
            .filter(item => item.isActive)
            .map(item => {
              const hasChildren = item.children && item.children.length > 0;

              // Dropdown: enlace para que al clicar cargue la página (ej: /sesiones)
              const menuItem = {
                key: item._id || item.title,
                label: (
                  <Link to={item.url || '/'}>{item.title}</Link>
                )
              };

              // Añadir icono según el tipo o título
              if (item.title.toLowerCase().includes('inicio') || item.title.toLowerCase().includes('home')) {
                menuItem.icon = <HomeOutlined />;
              } else if (item.title.toLowerCase().includes('contacto') || item.title.toLowerCase().includes('contact')) {
                menuItem.icon = <ContactsOutlined />;
              } else if (item.title.toLowerCase().includes('sesiones') || item.title.toLowerCase().includes('session')) {
                menuItem.icon = <CameraOutlined />;
              } else if (item.title.toLowerCase().includes('productos') || item.title.toLowerCase().includes('product')) {
                menuItem.icon = <ShoppingOutlined />;
              }

              // Si tiene hijos, procesarlos con Link para SPA (sin recarga)
              if (hasChildren) {
                menuItem.children = item.children
                  .filter(child => child.isActive)
                  .map(child => ({
                    key: child.url || child.title,
                    label: (
                      <Link to={child.url || '/'}>{child.title}</Link>
                    )
                  }));
              }

              return menuItem;
            });

          setMenuItems(items);
        }
      } catch (error) {
        console.error('Error al cargar el menú dinámico:', error);
        // Si falla, usar menú por defecto
        setMenuItems(getDefaultMenu());
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const getDefaultMenu = () => [
    {
      label: <Link to="/">Inicio</Link>,
      key: 'inicio',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/sobre-mi">Sobre mí</Link>,
      key: 'sobre-mi',
      icon: null,
    },
    {
      label: 'Sesiones',
      key: 'sesiones',
      icon: <CameraOutlined />,
      children: [
        { key: '/sesiones/revelacion-sexo', label: <Link to="/sesiones/revelacion-sexo">Revelación del sexo</Link> },
        { key: '/sesiones/maternidad', label: <Link to="/sesiones/maternidad">Maternidad</Link> },
        { key: '/sesiones/newborn', label: <Link to="/sesiones/newborn">Newborn</Link> },
        { key: '/sesiones/seguimiento', label: <Link to="/sesiones/seguimiento">Seguimiento</Link> },
        { key: '/sesiones/cake-smash', label: <Link to="/sesiones/cake-smash">Cake-Smash</Link> },
        { key: '/sesiones/dos-tres', label: <Link to="/sesiones/dos-tres">Dos, Tres...</Link> },
      ],
    },
    {
      label: <Link to="/contacto">Contacto</Link>,
      key: 'contacto',
      icon: <ContactsOutlined />,
    },
    {
      label: <Link to="/productos">Productos</Link>,
      key: 'productos',
      icon: <ShoppingOutlined />,
    },
  ];

  if (loading) {
    return <div>Cargando menú...</div>;
  }

  return (
    <Menu 
      mode="horizontal" 
      items={menuItems} 
      triggerSubMenuAction="hover"
      className={className}
      style={style}
    />
  );
};

export default DynamicMenu;


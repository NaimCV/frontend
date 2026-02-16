import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import GridImagenesHome from '../componentes/Templates/GridImagenesHome';
import SliderHome from '../componentes/home/slider_home';
import { MaternitySessionTemplate, SessionTemplate } from '../componentes/Templates/SessionTemplates';
import DynamicPageRenderer from '../components/DynamicPageRenderer';
import '../index.css';

const DynamicPage = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { '*': slug } = useParams(); // Captura toda la ruta dinámica
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchPage();
  }, [slug]);

  const fetchPage = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Si estamos en la ruta raíz (/), buscar la página de inicio
      if (!slug || slug === '' || location.pathname === '/') {
        try {
          const response = await axios.get('http://localhost:5000/api/pages/homepage');
          setPage(response.data);
          return;
        } catch (homepageError) {
          if (homepageError.response && homepageError.response.status === 404) {
            setError('No hay página de inicio configurada');
            return;
          }
          throw homepageError;
        }
      }
      
      // Construir la URL completa para la API
      const fullSlug = slug || location.pathname.substring(1); // Remover la barra inicial
      
      let response;
      
      // Primero intentar con la nueva API de URLs jerárquicas
      try {
        response = await axios.get(`http://localhost:5000/api/pages/url/${fullSlug}`);
      } catch (urlError) {
        // Si falla, intentar con el slug simple
        if (urlError.response && urlError.response.status === 404) {
          response = await axios.get(`http://localhost:5000/api/pages/slug/${fullSlug}`);
        } else {
          throw urlError;
        }
      }
      
      setPage(response.data);
    } catch (error) {
      console.error('Error al cargar la página:', error);
      if (error.response && error.response.status === 404) {
        setError('Página no encontrada');
      } else {
        setError('Error al cargar la página');
      }
    } finally {
      setLoading(false);
    }
  };

  const renderTemplate = () => {
    if (!page || !page.template) return null;

    const { template, content } = page;

    switch (template.type) {
      case 'gallery':
        return (
          <div style={{ padding: '2rem 7%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              {content.titulo}
            </h1>
            <GridImagenesHome 
              data={{
                titulo: content.titulo,
                imagenes: content.imagenes,
                columnas: content.columnas || 3
              }}
            />
          </div>
        );

      case 'slider':
        return (
          <div style={{ padding: '2rem 7%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              {content.titulo}
            </h1>
            <SliderHome />
          </div>
        );

      case 'maternity-session':
        return (
          <div style={{ padding: '2rem 7%' }}>
            <MaternitySessionTemplate content={content} />
          </div>
        );

      case 'newborn-session':
      case 'cake-smash-session':
      case 'follow-up-session':
      case 'gender-reveal-session':
      case 'two-three-session':
        return (
          <div style={{ padding: '2rem 7%' }}>
            <SessionTemplate content={content} templateType={template.type} />
          </div>
        );

      case 'contact':
        return (
          <div style={{ padding: '2rem 7%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              {content.titulo}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: content.contenido }} />
          </div>
        );

      case 'pricing':
        return (
          <div style={{ padding: '2rem 7%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              {content.titulo}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: content.contenido }} />
          </div>
        );

      case 'session-detail':
        return (
          <div style={{ padding: '2rem 7%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              {content.titulo}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: content.contenido }} />
          </div>
        );

      default:
        return (
          <div style={{ padding: '2rem 7%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
              {page.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: content.contenido || content.descripcion }} />
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh',
        fontSize: '1.2rem'
      }}>
        Cargando página...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh',
        fontSize: '1.2rem'
      }}>
        <p>{error}</p>
        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  // Si la página tiene componentes dinámicos, usar el nuevo renderizador
  if (page.components && page.components.length > 0) {
    return (
      <div style={{ padding: '2rem 7%' }}>
        <DynamicPageRenderer page={page} />
      </div>
    );
  }

  // Si no tiene componentes, usar el sistema anterior de templates
  return (
    <div>
      {renderTemplate()}
    </div>
  );
};

export default DynamicPage;

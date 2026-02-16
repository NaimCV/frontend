import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Collapse, Image, Card, Col, Row, Carousel } from 'antd';
import { path_images } from '../../consts';
import GridTresImagenes from '../Templates/GridTresImagenes';
import GaleriaImagenes from '../Templates/Galeria_imagenes';
import parse from 'html-react-parser';

const { Panel } = Collapse;

// Componente para renderizar sesiones de maternidad
const MaternitySessionTemplate = ({ content }) => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

  const imagenesGrid1 = content.imagenes_grid1 ? content.imagenes_grid1.split(',').map(id => id.trim()) : [];
  const imagenesGrid2 = content.imagenes_grid2 ? content.imagenes_grid2.split(',').map(id => id.trim()) : [];
  const galeriaImagenes = content.galeria_imagenes ? content.galeria_imagenes.split(',').map(id => id.trim()) : [];

  return (
    <div>
      <Mobile>
        <h1 style={{ textAlign: 'center' }}>{content.titulo}</h1>
        <div>
          <Image 
            alt="portada" 
            className='imagen-responsive-center-roudend' 
            src={path_images.replace('<image_id>', content.imagen_portada)}
          />
        </div>
        {content.texto_inicial && (
          <div className='description-align' style={{ marginTop: '10px' }}>
            <p>{content.texto_inicial}</p>
          </div>
        )}
        {imagenesGrid1.length > 0 && (
          <GridTresImagenes gridTriple={imagenesGrid1} />
        )}
        {content.precios && (
          <div style={{marginTop: '50px'}}>
            <div dangerouslySetInnerHTML={{ __html: content.precios }} />
          </div>
        )}
        {content.preguntas_frecuentes && (
          <div style={{marginTop: '30px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
            <div dangerouslySetInnerHTML={{ __html: content.preguntas_frecuentes }} />
          </div>
        )}
        {content.mostrar_carousel && (
          <div style={{marginTop: '50px'}}>
            <Carousel autoplay dots={false} fade={true}>
              <div>
                <Image className='imagen-responsive-center-roudend' alt='marron' src={path_images.replace('<image_id>', 'f1d749b9-d3bc-466b-088c-bf122f481300')}/>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo marron</div>
              </div>
              <div>
                <Image className='imagen-responsive-center-roudend' alt='gris' src={path_images.replace('<image_id>', 'dcdc6919-a006-44a8-a7b3-464a6d7f3900')}/>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo gris</div>
              </div>
              <div>
                <Image className='imagen-responsive-center-roudend' alt='negro' src={path_images.replace('<image_id>', '75e41a73-71cd-403f-64e4-addb1c43e900')}/>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo negro</div>
              </div>
              <div>
                <Image className='imagen-responsive-center-roudend' alt='blanco' src={path_images.replace('<image_id>', 'dab818ae-299e-4702-c2c0-051ac374b400')}/>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo blanco</div>
              </div>
            </Carousel>
          </div>
        )}
        {content.mostrar_tematica && imagenesGrid2.length > 0 && (
          <div style={{marginTop: '50px', textAlign: 'center'}}>
            <h2>Seguimiento con temática</h2>
            <p><b>¡Novedad!</b> Os doy la opción de personalizar uno de los escenarios con algún atrezzo con temática.</p>
            <GridTresImagenes gridTriple={imagenesGrid2} />
          </div>
        )}
        {galeriaImagenes.length > 0 && (
          <div>
            <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Galería {content.titulo}</h2>
            <GaleriaImagenes data={galeriaImagenes}/>
          </div>
        )}
      </Mobile>
      
      <Default>
        <h1 style={{ textAlign: 'center' }}>{content.titulo}</h1>
        <div className='center'>
          <Image 
            alt="portada" 
            className='imagen-responsive-center-roudend' 
            src={path_images.replace('<image_id>', content.imagen_portada)}
          />
        </div>
        {content.texto_inicial && (
          <div className='description-align'>
            <p>{content.texto_inicial}</p>
          </div>
        )}
        {imagenesGrid1.length > 0 && (
          <GridTresImagenes gridTriple={imagenesGrid1}/>
        )}
        {content.precios && (
          <div style={{ marginTop: '50px'}}>
            <div dangerouslySetInnerHTML={{ __html: content.precios }} />
          </div>
        )}
        {content.preguntas_frecuentes && (
          <div style={{marginTop: '30px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
            <div dangerouslySetInnerHTML={{ __html: content.preguntas_frecuentes }} />
          </div>
        )}
        {content.mostrar_carousel && (
          <div style={{marginTop: '50px'}}>
            <Carousel autoplay dots={false} fade={true}>
              <div>
                <Image className='imagen-responsive-center-roudend' alt='marron' src={path_images.replace('<image_id>', 'f1d749b9-d3bc-466b-088c-bf122f481300')}/>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo marron</div>
              </div>
              <div>
                <Image className='imagen-responsive-center-roudend' alt='gris' src={path_images.replace('<image_id>', 'dcdc6919-a006-44a8-a7b3-464a6d7f3900')}/>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo gris</div>
              </div>
              <div>
                <Image className='imagen-responsive-center-roudend' alt='negro' src={path_images.replace('<image_id>', '75e41a73-71cd-403f-64e4-addb1c43e900')}/>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo negro</div>
              </div>
              <div>
                <Image className='imagen-responsive-center-roudend' alt='blanco' src={path_images.replace('<image_id>', 'dab818ae-299e-4702-c2c0-051ac374b400')}/>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>Fondo blanco</div>
              </div>
            </Carousel>
          </div>
        )}
        {content.mostrar_tematica && imagenesGrid2.length > 0 && (
          <div style={{marginTop: '50px', textAlign: 'center'}}>
            <h2>Seguimiento con temática</h2>
            <p><b>¡Novedad!</b> Os doy la opción de personalizar uno de los escenarios con algún atrezzo con temática.</p>
            <GridTresImagenes gridTriple={imagenesGrid2} />
          </div>
        )}
        {galeriaImagenes.length > 0 && (
          <div>
            <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Galería {content.titulo}</h2>
            <GaleriaImagenes data={galeriaImagenes}/>
          </div>
        )}
      </Default>
    </div>
  );
};

// Componente genérico para otras sesiones
const SessionTemplate = ({ content, templateType }) => {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

  const imagenesGrid1 = content.imagenes_grid1 ? content.imagenes_grid1.split(',').map(id => id.trim()) : [];
  const imagenesGrid2 = content.imagenes_grid2 ? content.imagenes_grid2.split(',').map(id => id.trim()) : [];
  const galeriaImagenes = content.galeria_imagenes ? content.galeria_imagenes.split(',').map(id => id.trim()) : [];

  return (
    <div>
      <Mobile>
        <h1 style={{ textAlign: 'center' }}>{content.titulo}</h1>
        <div>
          <Image 
            alt="portada" 
            className='imagen-responsive-center-roudend' 
            src={path_images.replace('<image_id>', content.imagen_portada)}
          />
        </div>
        {content.texto_inicial && (
          <div className='description-align' style={{ marginTop: '10px' }}>
            <p>{content.texto_inicial}</p>
          </div>
        )}
        {imagenesGrid1.length > 0 && (
          <GridTresImagenes gridTriple={imagenesGrid1} />
        )}
        {content.precios && (
          <div style={{marginTop: '50px'}}>
            <div dangerouslySetInnerHTML={{ __html: content.precios }} />
          </div>
        )}
        {content.preguntas_frecuentes && (
          <div style={{marginTop: '30px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
            <div dangerouslySetInnerHTML={{ __html: content.preguntas_frecuentes }} />
          </div>
        )}
        {galeriaImagenes.length > 0 && (
          <div>
            <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Galería {content.titulo}</h2>
            <GaleriaImagenes data={galeriaImagenes}/>
          </div>
        )}
      </Mobile>
      
      <Default>
        <h1 style={{ textAlign: 'center' }}>{content.titulo}</h1>
        <div className='center'>
          <Image 
            alt="portada" 
            className='imagen-responsive-center-roudend' 
            src={path_images.replace('<image_id>', content.imagen_portada)}
          />
        </div>
        {content.texto_inicial && (
          <div className='description-align'>
            <p>{content.texto_inicial}</p>
          </div>
        )}
        {imagenesGrid1.length > 0 && (
          <GridTresImagenes gridTriple={imagenesGrid1}/>
        )}
        {content.precios && (
          <div style={{ marginTop: '50px'}}>
            <div dangerouslySetInnerHTML={{ __html: content.precios }} />
          </div>
        )}
        {content.preguntas_frecuentes && (
          <div style={{marginTop: '30px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
            <div dangerouslySetInnerHTML={{ __html: content.preguntas_frecuentes }} />
          </div>
        )}
        {galeriaImagenes.length > 0 && (
          <div>
            <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Galería {content.titulo}</h2>
            <GaleriaImagenes data={galeriaImagenes}/>
          </div>
        )}
      </Default>
    </div>
  );
};

export { MaternitySessionTemplate, SessionTemplate };

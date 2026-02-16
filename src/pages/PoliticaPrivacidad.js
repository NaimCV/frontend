import React from 'react';
import PlantillaCondiciones from "../componentes/Templates/PlantillaCondiciones";

export default function PoliticaPrivacidad() {
    const items = [
        {
          key: '1',
          label: '1. Información que Recopilamos',
          children: (
            <ul>
              <li><strong>Datos de Identificación</strong>: Recopilamos información personal como nombre, dirección de correo electrónico, número de teléfono y dirección postal cuando te pones en contacto con nosotros o contratas nuestros servicios.</li>
              <li><strong>Información de Pago</strong>: Para procesar pagos, recopilamos información de facturación y métodos de pago. Esta información se procesa de forma segura a través de nuestros proveedores de pago autorizados.</li>
              <li><strong>Información de la Sesión</strong>: Recopilamos información relacionada con las sesiones fotográficas, incluyendo fechas, ubicaciones, preferencias y detalles específicos acordados para el servicio.</li>
              <li><strong>Imágenes y Contenido</strong>: Las fotografías capturadas durante las sesiones contienen información personal y se tratan con la máxima confidencialidad según se establece en esta política.</li>
            </ul>
          ),
        },
        {
          key: '2',
          label: '2. Uso de la Información',
          children: (
            <ul>
              <li><strong>Prestación de Servicios</strong>: Utilizamos tu información personal para proporcionar, gestionar y mejorar nuestros servicios fotográficos, incluyendo la comunicación contigo sobre tu sesión y la entrega de fotografías.</li>
              <li><strong>Comunicación</strong>: Utilizamos tu información de contacto para comunicarnos contigo sobre tu sesión, responder a tus consultas, enviar actualizaciones y gestionar reservas y pagos.</li>
              <li><strong>Mejora de Servicios</strong>: Podemos utilizar información agregada y anónima para mejorar nuestros servicios, analizar tendencias y optimizar la experiencia del cliente.</li>
              <li><strong>Uso Promocional</strong>: Con tu consentimiento, podemos utilizar tus fotografías para fines promocionales en nuestro sitio web, redes sociales y materiales de marketing. Siempre puedes solicitar que no se utilicen tus imágenes para estos fines.</li>
            </ul>
          ),
        },
        {
          key: '3',
          label: '3. Compartir Información',
          children: (
            <ul>
              <li><strong>Proveedores de Servicios</strong>: Podemos compartir información con proveedores de servicios de confianza que nos ayudan a operar nuestro negocio, como plataformas de entrega de imágenes (Uphlow), procesadores de pago y servicios de hosting, siempre bajo estrictos acuerdos de confidencialidad.</li>
              <li><strong>Requisitos Legales</strong>: Podemos divulgar información personal cuando sea requerido por ley, orden judicial o proceso legal, o para proteger nuestros derechos, propiedad o seguridad.</li>
              <li><strong>No Vendemos Datos</strong>: No vendemos, alquilamos ni compartimos tu información personal con terceros para sus propios fines de marketing sin tu consentimiento explícito.</li>
              <li><strong>Transferencias Internacionales</strong>: Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo. En estos casos, nos aseguramos de que existan salvaguardas adecuadas para proteger tu información.</li>
            </ul>
          ),
        },
        {
          key: '4',
          label: '4. Seguridad de los Datos',
          children: (
            <ul>
              <li><strong>Medidas de Seguridad</strong>: Implementamos medidas técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.</li>
              <li><strong>Almacenamiento Seguro</strong>: Tus datos se almacenan en servidores seguros y protegidos. Las imágenes se almacenan en plataformas de confianza con encriptación adecuada.</li>
              <li><strong>Acceso Limitado</strong>: Solo el personal autorizado tiene acceso a tu información personal, y solo en la medida necesaria para proporcionar nuestros servicios.</li>
              <li><strong>Retención de Datos</strong>: Conservamos tu información personal durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.</li>
            </ul>
          ),
        },
        {
          key: '5',
          label: '5. Tus Derechos',
          children: (
            <ul>
              <li><strong>Derecho de Acceso</strong>: Tienes derecho a acceder a la información personal que tenemos sobre ti y a recibir una copia de la misma.</li>
              <li><strong>Derecho de Rectificación</strong>: Puedes solicitar la corrección de información inexacta o incompleta sobre ti.</li>
              <li><strong>Derecho de Supresión</strong>: Puedes solicitar la eliminación de tu información personal en ciertas circunstancias, sujeto a nuestras obligaciones legales de retención.</li>
              <li><strong>Derecho de Oposición</strong>: Puedes oponerte al procesamiento de tu información personal para ciertos fines, como marketing directo o uso promocional de tus imágenes.</li>
              <li><strong>Derecho de Portabilidad</strong>: Tienes derecho a recibir tu información personal en un formato estructurado y de uso común.</li>
              <li><strong>Retirar Consentimiento</strong>: Puedes retirar tu consentimiento en cualquier momento cuando el procesamiento se base en el consentimiento.</li>
            </ul>
          ),
        },
        {
          key: '6',
          label: '6. Cookies y Tecnologías Similares',
          children: (
            <ul>
              <li><strong>Uso de Cookies</strong>: Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el contenido.</li>
              <li><strong>Tipos de Cookies</strong>: Utilizamos cookies esenciales para el funcionamiento del sitio, cookies de análisis para entender cómo los visitantes interactúan con nuestro sitio, y cookies de preferencias para recordar tus configuraciones.</li>
              <li><strong>Control de Cookies</strong>: Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio.</li>
              <li><strong>Cookies de Terceros</strong>: Algunos servicios de terceros, como Google Analytics, pueden utilizar cookies. Consulta las políticas de privacidad de estos servicios para más información.</li>
            </ul>
          ),
        },
        {
          key: '7',
          label: '7. Menores de Edad',
          children: (
            <ul>
              <li><strong>Protección de Menores</strong>: Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente información personal de menores de edad sin el consentimiento de sus padres o tutores legales.</li>
              <li><strong>Sesiones con Menores</strong>: Cuando realizamos sesiones fotográficas que incluyen menores, requerimos el consentimiento explícito de los padres o tutores legales para el procesamiento de imágenes y datos relacionados.</li>
              <li><strong>Derechos de los Padres</strong>: Los padres o tutores tienen derecho a acceder, rectificar o solicitar la eliminación de la información de sus hijos menores de edad.</li>
            </ul>
          ),
        },
        {
          key: '8',
          label: '8. Cambios en esta Política',
          children: (
            <ul>
              <li><strong>Actualizaciones</strong>: Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestras prácticas o por razones legales, operativas o regulatorias.</li>
              <li><strong>Notificación de Cambios</strong>: Te notificaremos sobre cambios significativos en esta política a través de correo electrónico o mediante un aviso prominente en nuestro sitio web.</li>
              <li><strong>Revisión Regular</strong>: Te recomendamos revisar esta política periódicamente para estar informado sobre cómo protegemos tu información.</li>
              <li><strong>Fecha de Vigencia</strong>: La fecha de la última actualización se indica al final de esta política. El uso continuado de nuestros servicios después de los cambios constituye tu aceptación de la política revisada.</li>
            </ul>
          ),
        },
        {
          key: '9',
          label: '9. Contacto y Ejercicio de Derechos',
          children: (
            <ul>
              <li><strong>Contacto</strong>: Para ejercer tus derechos, hacer preguntas sobre esta política o presentar una queja, puedes contactarnos a través de nuestro <a href="/contacto">formulario de contacto</a> o por email en <strong>info@martaoliveda.com</strong>.</li>
              <li><strong>Respuesta a Solicitudes</strong>: Responderemos a tus solicitudes relacionadas con tus derechos de privacidad en un plazo máximo de 30 días hábiles.</li>
              <li><strong>Autoridad de Control</strong>: Si no estás satisfecho con nuestra respuesta, tienes derecho a presentar una queja ante la Agencia Española de Protección de Datos (AEPD) o la autoridad de protección de datos de tu jurisdicción.</li>
              <li><strong>Información Adicional</strong>: Si necesitas información adicional sobre cómo procesamos tus datos personales o sobre tus derechos, no dudes en contactarnos.</li>
            </ul>
          ),
        },
      ];

    const props = {
        titulo: 'Política de Privacidad',
        descripcion: 'En Marta Oliveda Estudio Fotográfico, nos comprometemos a proteger tu privacidad y a manejar tu información personal de manera responsable y transparente. Esta Política de Privacidad explica cómo recopilamos, utilizamos, compartimos y protegemos tu información personal cuando utilizas nuestros servicios. Por favor, lee esta política cuidadosamente para entender nuestras prácticas de privacidad.',
        items: items
    };

    return (
        <PlantillaCondiciones props={props}/>
    );
}


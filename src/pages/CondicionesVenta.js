import React from 'react';
import PlantillaCondiciones from "../componentes/Templates/PlantillaCondiciones";

export default function CondicionesVenta() {
    const items = [
        {
          key: '1',
          label: '1. Servicios Fotográficos',
          children: (
            <ul>
              <li>Ofrecemos una variedad de servicios fotográficos, incluyendo sesiones de maternidad, newborn, seguimiento, cake smash y sesiones Dos, Tres…</li>
              <li>La descripción detallada de cada servicio está disponible en nuestro sitio web.</li>
              <li>Todos nuestros servicios se realizan con equipamiento profesional de alta calidad.</li>
            </ul>
          ),
        },
        {
          key: '2',
          label: '2. Reservas y Pagos',
          children: (
            <ul>
              <li>Las reservas se confirman mediante el pago de un anticipo, cuyo monto se especificará en el momento de la reserva.</li>
              <li>El pago completo debe realizarse como máximo el mismo día de la sesión fotográfica.</li>
              <li>Aceptamos diferentes métodos de pago que se comunicarán al momento de la reserva.</li>
            </ul>
          ),
        },
        {
          key: '3',
          label: '3. Cancelaciones y Cambios',
          children: (
            <ul>
              <li>Las cancelaciones deben notificarse con al menos 1 día de anticipación para recibir un reembolso completo del anticipo.</li>
              <li>Las cancelaciones con menos de 24 horas de anticipación no serán reembolsables.</li>
              <li>Los cambios en la fecha o el tipo de servicio están sujetos a disponibilidad y pueden tener costos adicionales.</li>
            </ul>
          ),
        },
        {
          key: '4',
          label: '4. Derechos de Autor',
          children: (
            <ul>
              <li>Todos los derechos de autor de las imágenes capturadas pertenecen a Marta Oliveda Estudio Fotográfico.</li>
              <li>Se otorga a los clientes una licencia no exclusiva para el uso personal de las imágenes.</li>
              <li>Está prohibida la reproducción, distribución o uso comercial de las imágenes sin autorización previa por escrito.</li>
            </ul>
          ),
        },
        {
          key: '5',
          label: '5. Entrega de Fotografías',
          children: (
            <ul>
              <li>Las fotografías se entregarán en formato digital de alta calidad a través de la plataforma Uphlow.</li>
              <li>El plazo de entrega es de 7 días hábiles después de la sesión fotográfica.</li>
              <li>En caso de retraso, se notificará al cliente con la mayor brevedad posible.</li>
            </ul>
          ),
        },
        {
          key: '6',
          label: '6. Retoques y Edición',
          children: (
            <ul>
              <li>Realizamos retoques básicos y ajustes de color profesionales en todas las imágenes entregadas.</li>
              <li>Las solicitudes adicionales de edición o retoques especiales pueden estar sujetas a tarifas adicionales.</li>
              <li>El estilo de edición se mantiene consistente con nuestro portfolio y marca personal.</li>
            </ul>
          ),
        },
        {
          key: '7',
          label: '7. Uso Comercial',
          children: (
            <ul>
              <li>El uso comercial de las imágenes requiere un acuerdo por escrito y puede estar sujeto a tarifas adicionales.</li>
              <li>Se considerará uso comercial cualquier utilización de las imágenes con fines promocionales, publicitarios o comerciales.</li>
              <li>Para más información sobre licencias comerciales, contacta con nosotros directamente.</li>
            </ul>
          ),
        },
        {
          key: '8',
          label: '8. Responsabilidad y Compensación',
          children: (
            <ul>
              <li>Nos esforzamos por proporcionar servicios de alta calidad, pero no nos hacemos responsables de circunstancias fuera de nuestro control (condiciones climáticas adversas, problemas técnicos del equipo del cliente, etc.).</li>
              <li>Nuestra responsabilidad máxima se limita al monto pagado por los servicios contratados.</li>
              <li>En caso de insatisfacción, evaluaremos cada situación de forma individual para encontrar la mejor solución.</li>
            </ul>
          ),
        },
        {
          key: '9',
          label: '9. Términos y Condiciones Generales',
          children: (
            <ul>
              <li>Al contratar nuestros servicios, aceptas nuestros términos y condiciones generales disponibles en <a href="/terminos-condiciones">Términos y Condiciones Generales</a>.</li>
              <li>Los términos incluyen disposiciones sobre propiedad intelectual, responsabilidad, privacidad y otros aspectos legales.</li>
              <li>Nos reservamos el derecho de modificar estos términos, notificando los cambios con la debida antelación.</li>
            </ul>
          ),
        },
        {
          key: '10',
          label: '10. Información de Contacto',
          children: (
            <ul>
              <li>Para consultas, dudas o problemas, puedes contactarnos a través de nuestro <a href="/contacto">formulario de contacto</a> o directamente por email en <strong>info@martaoliveda.com</strong>.</li>
              <li>Nos comprometemos a responder todas las consultas en un plazo máximo de 48 horas hábiles.</li>
              <li>Para urgencias relacionadas con sesiones programadas, contacta con nosotros lo antes posible.</li>
            </ul>
          ),
        },
      ];

    const props = {
        titulo: 'Condiciones de Venta para Servicios Fotográficos',
        descripcion: 'Bienvenido a Marta Oliveda Estudio Fotográfico. Nos complace ser tu elección para capturar momentos especiales. A continuación, detallamos nuestras condiciones de venta para brindarte una experiencia transparente y satisfactoria. Por favor, lee atentamente estos términos antes de contratar nuestros servicios.',
        items: items
    };

    return (
        <PlantillaCondiciones props={props}/>
    );
}

import React from 'react';
import PlantillaCondiciones from "../componentes/Templates/PlantillaCondiciones";

export default function TerminosCondiciones() {
    const items = [
        {
          key: '1',
          label: '1. Servicios Fotográficos',
          children: (
            <ul>
              <li><strong>Descripción de Servicios</strong>: Marta Oliveda Estudio Fotográfico proporciona servicios de fotografía profesional según lo acordado con el cliente. La descripción detallada de cada servicio se especificará en el contrato correspondiente.</li>
              <li><strong>Reservas y Pagos</strong>: La reserva de servicios fotográficos se confirma mediante el pago de un anticipo, cuyo monto se especificará en el momento de la reserva del servicio. El pago completo debe realizarse como máximo el mismo día del servicio contratado.</li>
              <li><strong>Cancelaciones y Cambios</strong>: Las cancelaciones deben notificarse con al menos 1 día de anticipación para recibir un reembolso completo del anticipo. Las cancelaciones con menos de 24 horas de anticipación no serán reembolsables. Los cambios en la fecha o el tipo de servicio están sujetos a disponibilidad y pueden tener costos adicionales.</li>
              <li><strong>Equipamiento y Materiales</strong>: Todos nuestros servicios se realizan con equipamiento profesional de alta calidad. El cliente se compromete a proporcionar cualquier material o accesorio específico que se haya acordado previamente.</li>
            </ul>
          ),
        },
        {
          key: '2',
          label: '2. Derechos de Autor y Uso de Imágenes',
          children: (
            <ul>
              <li><strong>Derechos de Autor</strong>: Todos los derechos de autor de las imágenes capturadas por Marta Oliveda Estudio Fotográfico pertenecen al estudio. Se otorga a los clientes una licencia no exclusiva para el uso personal de las imágenes.</li>
              <li><strong>Uso Personal</strong>: El cliente puede utilizar las imágenes para uso personal, incluyendo impresiones, álbumes familiares y compartir en redes sociales personales, siempre que se mantenga el crédito al estudio cuando sea apropiado.</li>
              <li><strong>Uso Comercial</strong>: El uso comercial de las imágenes requiere un acuerdo por escrito y puede estar sujeto a tarifas adicionales. Se considerará uso comercial cualquier utilización de las imágenes con fines promocionales, publicitarios o comerciales.</li>
              <li><strong>Prohibiciones</strong>: Está prohibida la reproducción, distribución, modificación o uso comercial de las imágenes sin autorización previa por escrito del estudio. No se permite la eliminación de marcas de agua o firmas sin permiso expreso.</li>
            </ul>
          ),
        },
        {
          key: '3',
          label: '3. Entrega de Fotografías',
          children: (
            <ul>
              <li><strong>Formato de Entrega</strong>: Las fotografías se entregarán en formato digital de alta calidad a través de la plataforma Uphlow. El cliente recibirá un enlace de acceso seguro para descargar las imágenes.</li>
              <li><strong>Plazo de Entrega</strong>: El plazo de entrega estándar es de 7 días hábiles después de la sesión fotográfica, a menos que se acuerde de otra manera. En caso de retraso, se notificará al cliente con la mayor brevedad posible.</li>
              <li><strong>Almacenamiento</strong>: Se recomienda al cliente descargar y hacer una copia de seguridad de las imágenes, ya que el enlace de descarga tendrá una validez limitada. El estudio no se responsabiliza de la pérdida de imágenes una vez entregadas.</li>
              <li><strong>Calidad de Imágenes</strong>: Todas las imágenes entregadas estarán en formato de alta resolución, adecuadas para impresión y uso digital. El número de imágenes entregadas dependerá del tipo de sesión contratada.</li>
            </ul>
          ),
        },
        {
          key: '4',
          label: '4. Retoques y Edición',
          children: (
            <ul>
              <li><strong>Edición Básica</strong>: Marta Oliveda Estudio Fotográfico realizará retoques básicos profesionales y ajustes de color en todas las imágenes entregadas. Esto incluye corrección de exposición, balance de blancos y retoques menores.</li>
              <li><strong>Estilo de Edición</strong>: El estilo de edición se mantiene consistente con nuestro portfolio y marca personal. El cliente acepta este estilo al contratar nuestros servicios.</li>
              <li><strong>Edición Adicional</strong>: Las solicitudes adicionales de edición o retoques especiales pueden estar sujetas a tarifas adicionales. Estas solicitudes deben comunicarse antes de la entrega final de las imágenes.</li>
              <li><strong>Modificaciones por el Cliente</strong>: El cliente puede realizar modificaciones menores para uso personal, pero no puede alterar significativamente el estilo o la calidad de las imágenes sin autorización previa.</li>
            </ul>
          ),
        },
        {
          key: '5',
          label: '5. Responsabilidad y Compensación',
          children: (
            <ul>
              <li><strong>Responsabilidad Limitada</strong>: Marta Oliveda Estudio Fotográfico se esfuerza por proporcionar servicios de alta calidad, pero no se hace responsable de circunstancias fuera de su control, incluyendo condiciones climáticas adversas, problemas técnicos del equipo del cliente, o situaciones imprevistas durante la sesión.</li>
              <li><strong>Compensación Máxima</strong>: La responsabilidad máxima del estudio se limita al monto pagado por los servicios contratados. En caso de insatisfacción, evaluaremos cada situación de forma individual para encontrar la mejor solución.</li>
              <li><strong>Fuerza Mayor</strong>: El estudio no será responsable de retrasos o incumplimientos causados por eventos de fuerza mayor, incluyendo desastres naturales, pandemias, o cualquier otra circunstancia imprevisible e inevitable.</li>
              <li><strong>Reclamaciones</strong>: Cualquier reclamación debe presentarse por escrito dentro de los 7 días hábiles posteriores a la entrega de las fotografías. Las reclamaciones posteriores a este plazo no serán consideradas.</li>
            </ul>
          ),
        },
        {
          key: '6',
          label: '6. Términos y Condiciones Generales',
          children: (
            <ul>
              <li><strong>Aceptación de Términos</strong>: Al contratar nuestros servicios, el cliente acepta estos términos y condiciones generales, así como las condiciones de venta específicas disponibles en nuestro sitio web.</li>
              <li><strong>Modificaciones</strong>: Marta Oliveda Estudio Fotográfico se reserva el derecho de actualizar y cambiar estos términos en cualquier momento. Los clientes serán notificados de cambios significativos a través de correo electrónico o WhatsApp con al menos 30 días de anticipación.</li>
              <li><strong>Ley Aplicable</strong>: Estos términos y condiciones se rigen por la legislación española. Cualquier disputa será resuelta en los tribunales competentes del lugar donde se preste el servicio.</li>
              <li><strong>Privacidad</strong>: El tratamiento de datos personales se realiza de acuerdo con nuestra política de privacidad y la normativa vigente de protección de datos. Las imágenes pueden ser utilizadas por el estudio para fines promocionales, salvo que el cliente solicite lo contrario por escrito.</li>
            </ul>
          ),
        },
        {
          key: '7',
          label: '7. Información de Contacto',
          children: (
            <ul>
              <li>Para consultas, dudas o problemas relacionados con estos términos y condiciones, puedes contactarnos a través de nuestro <a href="/contacto">formulario de contacto</a> o directamente por email en <strong>info@martaoliveda.com</strong>.</li>
              <li>Nos comprometemos a responder todas las consultas en un plazo máximo de 48 horas hábiles.</li>
              <li>Para urgencias relacionadas con sesiones programadas o entregas, contacta con nosotros lo antes posible a través de los canales de comunicación establecidos.</li>
              <li>También puedes encontrarnos en nuestras redes sociales para estar al día de nuestras últimas novedades y promociones.</li>
            </ul>
          ),
        },
      ];

    const props = {
        titulo: 'Términos y Condiciones Generales',
        descripcion: 'Bienvenido a Marta Oliveda Estudio Fotográfico. Estos términos y condiciones generales establecen las bases legales de nuestra relación contigo como cliente. Por favor, lee atentamente estos términos antes de contratar nuestros servicios, ya que al hacerlo, aceptas estar sujeto a estas condiciones. Si tienes alguna pregunta, no dudes en contactarnos.',
        items: items
    };

    return (
        <PlantillaCondiciones props={props}/>
    );
}

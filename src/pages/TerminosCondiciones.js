import PlantillaCondiciones from "../componentes/Templates/PlantillaCondiciones";

export default function TerminosCondiciones() {
    const items = [
        {
          key: '1',
          label: '1. Servicios Fotográficos',
          children: <ul><li>1.1. <b>Descripción de Servicios</b>: Marta Oliveda estudio de fotografía proporciona servicios de fotografía según lo acordado con el cliente. La descripción detallada de cada servicio se especificará en el contrato correspondiente.</li>
          <li>1.2. <b>Reservas y Pagos</b>: La reserva de servicios fotográficos se confirma mediante el pago de un anticipo especificado en el momento de la reserva del servicio. El pago completo se debe realizar como máximo el mismo día del servicio contratado.</li>
          <li>1.3. <b>Cancelaciones y Cambios</b>: Las cancelaciones deben notificarse con al menos 1 días de anticipación para recibir un reembolso completo del anticipo. Los cambios en la fecha o el tipo de servicio están sujetos a disponibilidad y pueden tener costos adicionales.</li></ul>,
        },
        {
          key: '2',
          label: '2. Derechos de Autor y Uso de Imágenes',
          children: <ul><li>2.1. <b>Derechos de Autor</b>: Todos los derechos de autor de las imágenes capturadas por Marta Oliveda Estudio de Fotografía pertenecen al estudio. Se otorga a los clientes una licencia no exclusiva para el uso personal de las imágenes.</li>
          <li>2.2. <b>Uso Comercial</b>: El uso comercial de las imágenes requiere un acuerdo por escrito y puede estar sujeto a tarifas adicionales.</li></ul>,
        },
        {
          key: '3',
          label: '3. Entrega de Fotografías',
          children: <ul><li>3.1. <b>Formato de Entrega</b>: Las fotografías se entregarán en formato digital a través de Uphlow.</li>
          <li>3.2. <b>Plazo de Entrega</b>: El plazo de entrega estándar es de 7 días hábiles después de la sesión fotográfica, a menos que se acuerde de otra manera.</li></ul>,
        },
        {
          key: '4',
          label: '4. Retoques y Edición',
          children: <ul><li>4.1. <b>Edición Básica</b>: Marta Oliveda Estudio de Fotografía realizará retoques básicos y ajustes de color en todas las imágenes entregadas.</li>
          <li>4.2. <b>Edición Adicional</b>: Solicitudes adicionales de edición pueden estar sujetas a tarifas adicionales.</li></ul>,
        },
        {
          key: '5',
          label: '5. Responsabilidad y Compensación',
          children: <ul><li>5.1. <b>Responsabilidad Limitada</b>: Marta Oliveda Estudio de Fotografía se esfuerza por proporcionar servicios de alta calidad, pero no se hace responsable de circunstancias fuera de su control.</li>
          <li>5.2. <b>Compensación Máxima</b>: La responsabilidad máxima se limita al monto pagado por los servicios.</li></ul>,
        },
        {
          key: '6',
          label: '6. Términos y Condiciones Generales',
          children: <ul><li>6.1. <b>Aceptación de Términos</b>: Al contratar nuestros servicios, el cliente acepta estos términos y condiciones generales.</li>
          <li>6.2. <b>Modificaciones</b>: Marta Oliveda Estudio de Fotografía se reserva el derecho de actualizar y cambiar estos términos en cualquier momento. Los clientes serán notificados de cambios a través de correo electrónico o whatsapp.</li></ul>,
        },
        {
          key: '7',
          label: '7. Información de Contacto',
          children: <ul><li>Para consultas o problemas, contáctanos en <b>oliveda.photography@gmail.com</b>.</li></ul>,
        },
      ];

    const props = {
        titulo: 'Términos y Condiciones Generales',
        items: items
    }

    return (
        <PlantillaCondiciones props={props}/>
    )
}

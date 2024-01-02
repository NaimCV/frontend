import PlantillaCondiciones from "../componentes/Templates/PlantillaCondiciones";

export default function CondicionesVenta() {
    const items = [
        {
          key: '1',
          label: '1. Servicios Fotográficos',
          children: <ul><li>Ofrecemos una variedad de servicios fotográficos, incluyendo maternidad, newborn, seguimiento, cake smash y sesiones DOS, TRES….</li><li>La descripción detallada de cada servicio está disponible en nuestro sitio web.</li></ul>,
        },
        {
          key: '2',
          label: '2. Reservas y Pagos',
          children: <ul><li>Las reservas se confirman mediante el pago de un anticipo especificado en el momento de la reserva.</li><li>El pago completo se debe realizar como máximo el mismo día de la sesión.</li></ul>,
        },
        {
          key: '3',
          label: '3. Cancelaciones y Cambios',
          children: <ul><li>Las cancelaciones deben notificarse con al menos 1 día de anticipación para recibir un reembolso completo del anticipo.</li><li>Los cambios en la fecha o el tipo de servicio están sujetos a disponibilidad y pueden tener costos adicionales.</li></ul>,
        },
        {
          key: '4',
          label: '4. Derechos de Autor',
          children: <ul><li>Todos los derechos de autor de las imágenes capturadas pertenecen a Marta Oliveda Estudio Fotográfico.</li><li>Se otorga a los clientes una licencia no exclusiva para el uso personal de las imágenes.</li></ul>,
        },
        {
          key: '5',
          label: '5. Entrega de Fotografías',
          children: <ul><li>Las fotografías se entregarán en formato digital a través de Uphlow.</li><li>El plazo de entrega es de 7 días hábiles después de la sesión fotográfica.</li></ul>,
        },
        {
          key: '6',
          label: '6. Retoques y Edición',
          children: <ul><li>Realizamos retoques básicos y ajustes de color en todas las imágenes entregadas.</li><li>Solicitudes adicionales de edición pueden estar sujetas a tarifas adicionales.</li></ul>,
        },
        {
          key: '7',
          label: '7. Uso Comercial',
          children: <ul><li>El uso comercial de las imágenes requiere un acuerdo por escrito y puede estar sujeto a tarifas adicionales.</li></ul>,
        },
        {
          key: '8',
          label: '8. Responsabilidad y Compensación',
          children: <ul><li>Nos esforzamos por proporcionar servicios de alta calidad, pero no nos hacemos responsables de circunstancias fuera de nuestro control.</li><li>Nuestra responsabilidad máxima se limita al monto pagado por los servicios.</li></ul>,
        },
        {
          key: '9',
          label: '9. Términos y Condiciones Generales',
          children: <ul><li>Al contratar nuestros servicios, aceptas nuestros términos y condiciones generales disponibles en <a href="/terminos-condiciones">Términos y Condiciones Generales</a>.</li><li>Los términos incluyen disposiciones sobre propiedad intelectual, responsabilidad y otros aspectos.</li></ul>,
        },
        {
          key: '10',
          label: '10. Información de Contacto',
          children: <ul><li>Para consultas o problemas, contáctenos en oliveda.photography@gmail.com.</li></ul>,
        },
      ];

    const props = {
        titulo: 'Condiciones de Venta para Servicios Fotográficos',
        descripcion: 'Bienvenido a Marta Oliveda Estudio Fotográfico. Nos complace ser tu elección para capturar momentos especiales. A continuación, detallamos nuestras condiciones de venta para brindarte una experiencia transparente y satisfactoria:',
        items: items
    }

    return (
        <PlantillaCondiciones props={props}/>
    )
}

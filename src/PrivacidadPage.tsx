import { Link } from 'react-router-dom'

const DOMAIN = 'quantumautomatizaciones.novaautomat.site'

const privacyItems = [
  {
    title: '1. Responsable del Tratamiento',
    body: `Nombre comercial: Quantum Automatizaciones. Correo de contacto: contacto@quantum-ia.com. Ubicación: Ecuador — América Latina. Somos responsables del tratamiento de los datos personales recopilados a través del sitio ${DOMAIN}.`,
  },
  {
    title: '2. Datos Personales que Recopilamos',
    body: 'Datos proporcionados voluntariamente al iniciar conversación por WhatsApp: nombre, número de teléfono y mensajes enviados. Datos de navegación: dirección IP, tipo de dispositivo, ubicación general y páginas visitadas mediante herramientas de analítica web como Google Analytics o Meta Pixel.',
  },
  {
    title: '3. Finalidad del Tratamiento',
    body: 'Usamos tus datos para: (a) responder a tus consultas e iniciar conversaciones de soporte o ventas vía WhatsApp, (b) evaluar y diseñar propuestas de automatización con IA adaptadas a tu negocio, (c) enviar información comercial con tu autorización expresa, y (d) analizar el tráfico web para mejorar la experiencia de usuario.',
  },
  {
    title: '4. Uso de WhatsApp y Terceros',
    body: 'La interacción por chat se rige bajo los Términos de Privacidad de WhatsApp / Meta Platforms Inc. Los datos compartidos en el chat pueden ser procesados mediante infraestructura en la nube o agentes automatizados exclusivamente para gestionar la atención al cliente, garantizando la confidencialidad de la información de tu negocio. Si usamos herramientas de analítica (Meta Pixel, Google Analytics), estas cuentan con sus propias políticas de privacidad.',
  },
  {
    title: '5. Derechos del Usuario',
    body: 'Tienes derecho a acceder, corregir o eliminar tus datos personales en cualquier momento. Para ejercer tus derechos, envía un correo a contacto@quantum-ia.com con el asunto "Solicitud de datos". Atenderemos tu solicitud en un plazo máximo de 30 días hábiles.',
  },
  {
    title: '6. Cookies y Almacenamiento Local',
    body: 'Este sitio puede utilizar cookies técnicas necesarias para el funcionamiento básico de la web, así como cookies de seguimiento para analítica que nos ayudan a medir el rendimiento y mejorar nuestros servicios. Puedes configurar tu navegador para rechazar cookies opcionales en cualquier momento sin que esto afecte la navegación principal.',
  },
  {
    title: '7. Seguridad de los Datos',
    body: 'Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tu información contra acceso no autorizado, pérdida o alteración. Sin embargo, ninguna transmisión de datos por Internet es 100% segura, por lo que no podemos garantizar la seguridad absoluta de la información enviada.',
  },
  {
    title: '8. Cambios en esta Política',
    body: `Quantum Automatizaciones se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de última actualización. Te recomendamos revisarla periódicamente. El uso continuado del sitio ${DOMAIN} tras la publicación de cambios implica la aceptación de los mismos.`,
  },
]

export default function PrivacidadPage() {
  return (
    <div className="privacy-page">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="navbar-logo">Quantum<span>.</span></Link>
        <Link to="/" className="navbar-cta" style={{ background: 'rgba(102,51,238,0.15)', border: '1px solid rgba(102,51,238,0.35)', boxShadow: 'none' }}>
          ← Volver al inicio
        </Link>
      </nav>

      {/* Hero */}
      <div className="privacy-page-hero">
        <div className="privacy-page-hero-inner">
          <span className="section-label">Legal</span>
          <h1 className="privacy-page-title">Política de Privacidad</h1>
          <p className="privacy-page-sub">
            Última actualización: julio 2026 · Dominio: <span style={{ color: 'var(--purple-light)' }}>{DOMAIN}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="privacy-page-content">
        <div className="privacy-page-intro">
          En Quantum Automatizaciones nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política describe qué información recopilamos, cómo la usamos y cuáles son tus derechos al respecto. Al navegar por nuestro sitio web o interactuar con nosotros a través de WhatsApp, aceptas los términos descritos a continuación.
        </div>

        <div className="privacy-page-sections">
          {privacyItems.map((item, i) => (
            <div key={i} className="privacy-page-item">
              <h2 className="privacy-page-item-title">{item.title}</h2>
              <p className="privacy-page-item-body">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="privacy-page-contact">
          <h3>¿Tienes preguntas?</h3>
          <p>Para cualquier consulta relacionada con esta política, contáctanos en:</p>
          <a href="mailto:contacto@quantum-ia.com" className="privacy-contact-email">
            contacto@quantum-ia.com
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--black-border)', padding: '32px 60px', maxWidth: 860, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
        <span>© {new Date().getFullYear()} Quantum Automatizaciones</span>
        <Link to="/" style={{ color: 'var(--purple-accent)', textDecoration: 'none', fontSize: 13 }}>← Volver al inicio</Link>
      </footer>
    </div>
  )
}

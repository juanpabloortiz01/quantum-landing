import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

/* ─── WhatsApp config ──────────────────────────────────── */
const WA_NUMBER = '593000000000' // reemplaza con tu número real
const WA_MSG = encodeURIComponent('Hola, quiero automatizar mi negocio con Quantum.')
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

/* ─── Particles helper (mantenido para fondo) ───────────── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  left: Math.random() * 100,
  delay: Math.random() * 12,
  duration: Math.random() * 10 + 10,
}))

/* ─── SVG Icons ────────────────────────────────────────── */
const IconBrain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.14Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.44-4.14Z"/>
  </svg>
)

const IconFunnel = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
)

const IconSettings = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

/* ─── useReveal hook ───────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ─── APP ──────────────────────────────────────────────── */
export default function App() {
  const r2 = useReveal()
  const r3 = useReveal()
  const r4 = useReveal()
  const r5 = useReveal()

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#hero" className="navbar-logo" style={{ textDecoration: 'none' }}>Quantum<span>.</span></a>
        
        <div className="navbar-links">
          <a href="#demo-restaurantes" className="navbar-link">Restaurantes</a>
          <a href="#servicios" className="navbar-link">Servicios</a>
          <a href="#como-funciona" className="navbar-link">Cómo Funciona</a>
          <a href="#contacto" className="navbar-link">Contacto</a>
        </div>

        <a id="navbar-whatsapp-cta" href={WA_URL} target="_blank" rel="noopener noreferrer" className="navbar-cta">
          <IconWhatsApp />
          WhatsApp
        </a>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="hero" className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-particles" aria-hidden="true">
          {PARTICLES.map(p => (
            <div
              key={p.id}
              className="particle"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>

        <div className="hero-content hero-content--minimal">
          {/* Logo con brillo morado */}
          <div className="hero-logo-wrap">
            <img
              src="/logo-white.png"
              alt="Quantum Logo"
              className="hero-logo-img"
            />
            <div className="hero-logo-glow" aria-hidden="true" />
          </div>

          {/* Copy minimalista */}
          <h1 className="hero-title-minimal">
            Escala con IA.
          </h1>
          <p className="hero-line2">
            Sin procesos manuales.
          </p>

          {/* CTA */}
          <a
            id="hero-whatsapp-cta"
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-hero-minimal"
          >
            <IconWhatsApp />
            Chatear por WhatsApp
          </a>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <div className="scroll-bar" />
        </div>
      </section>

      <div className="section-divider" />

      {/* ── DEMO RESTAURANTES ─────────────────────────────── */}
      <section id="demo-restaurantes" style={{ background: 'var(--black-soft)', overflow: 'hidden' }}>
        <div ref={r2} className="section reveal" style={{ paddingBottom: 0 }}>

          {/* Header */}
          <div className="demo-header">
            <span className="demo-badge">✦ Quantum para Restaurantes</span>
            <h2 className="section-title" style={{ marginTop: 20, marginBottom: 16 }}>
              Agenda una prueba<br /><span className="highlight">Gratuita</span>
            </h2>
            <p className="section-sub" style={{ marginBottom: 40 }}>
              Agentes de IA que toman pedidos y gestionan reservas en menos de 5 minutos.
            </p>

            {/* CTA buttons */}
            <div className="demo-btn-group">
              <a href="https://quantum.novaautomat.site/" target="_blank" rel="noopener noreferrer" className="demo-btn demo-btn--primary">
                Probar Demo
              </a>
            </div>
          </div>
        </div>

        {/* Sliding card carousel */}
        <div className="carousel-track-wrap">
          <div className="carousel-track">
            {['/demo-1.png', '/demo-2.png', '/demo-3.png',
              '/demo-1.png', '/demo-2.png', '/demo-3.png'].map((src, i) => (
              <div key={i} className="carousel-card">
                <div className="carousel-card-glow" />
                <img src={src} alt={`Demo ${(i % 3) + 1}`} className="carousel-card-img" />
              </div>
            ))}
          </div>
        </div>
      </section>


      <div className="section-divider" />

      {/* ── SERVICIOS ─────────────────────────────────────── */}
      <section id="servicios">
        <div ref={r3} className="section reveal">
          <div className="section-label">Qué hacemos</div>
          <h2 className="section-title">Soluciones de IA<br /><span className="highlight">a la medida</span></h2>
          <p className="section-sub">Tres áreas clave donde transformamos tu operación con tecnología de punta.</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><IconBrain /></div>
              <h3 className="service-title">Agentes e Integraciones de IA</h3>
              <p className="service-desc">Chatbots avanzados y automatización de atención al cliente o ventas que trabajan por ti las 24 horas.</p>
              <div className="service-glow" />
            </div>

            <div className="service-card">
              <div className="service-icon"><IconFunnel /></div>
              <h3 className="service-title">Embudos y Captación Automática</h3>
              <p className="service-desc">Sistemas que atraen, clasifican y nutren prospectos sin intervención humana, maximizando tu conversión.</p>
              <div className="service-glow" />
            </div>

            <div className="service-card">
              <div className="service-icon"><IconSettings /></div>
              <h3 className="service-title">Optimización de Operaciones</h3>
              <p className="service-desc">Conectamos tus CRMs, bases de datos y flujos de trabajo para eliminar el trabajo manual y errores.</p>
              <div className="service-glow" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CÓMO FUNCIONA ─────────────────────────────────── */}
      <div id="como-funciona" className="how-bg">
        <div ref={r4} className="how-inner reveal">
          <div className="section-label">El Proceso</div>
          <h2 className="section-title">Trabajar con nosotros<br />es <span className="highlight">simple</span></h2>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-divider" />
              <div className="step-number">01</div>
              <h3 className="step-title">Diagnóstico</h3>
              <p className="step-desc">Analizamos los cuellos de botella de tu negocio en una llamada rápida y sin compromiso.</p>
            </div>
            <div className="step-card">
              <div className="step-divider" />
              <div className="step-number">02</div>
              <h3 className="step-title">Construcción</h3>
              <p className="step-desc">Diseñamos e implementamos la arquitectura de automatización con IA adaptada a tu realidad.</p>
            </div>
            <div className="step-card">
              <div className="step-divider" />
              <div className="step-number">03</div>
              <h3 className="step-title">Escalamiento</h3>
              <p className="step-desc">Tu sistema opera en piloto automático mientras tú te enfocas en hacer crecer el negocio.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <section id="contacto">
        <div ref={r5} className="cta-final reveal">
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-final-content">
            <div className="section-label" style={{ marginBottom: 20 }}>¿Todo listo?</div>
            <h2 className="cta-final-title">¿Listo para llevar tu negocio al siguiente nivel con IA?</h2>
            <p className="cta-final-sub">Hablemos hoy mismo. Evaluamos tu caso sin compromiso.</p>
            <a
              id="cta-final-whatsapp"
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 17, padding: '18px 44px' }}
            >
              <IconWhatsApp />
              Iniciar conversación en WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer id="footer">
        <div className="footer">
          <div className="footer-top" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <div className="footer-logo">Quantum<span>.</span></div>
              <p className="footer-tagline">
                Automatización inteligente para empresas que quieren crecer sin límites.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
              <p style={{ fontSize: 13, color: 'var(--white-muted)', marginBottom: 4 }}>Legal</p>
              <Link
                to="/privacidad"
                className="footer-privacy-link"
              >
                Política de Privacidad →
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Quantum Automatizaciones. Todos los derechos reservados.</span>
            <span>contacto@quantum-ia.com</span>
          </div>
        </div>
      </footer>
    </>
  )
}

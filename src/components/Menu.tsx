import "../css/Menu.css";
type Props = {};

function Menu({}: Props) {
  return (
    <div className="container_main" id="main">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            ¡Hola, soy <span className="highlight">Cesar Andrade!</span>
          </h1>
          <h2 className="hero-subtitle">
            Soy <span className="highlight">Desarrollador</span>
          </h2>
          <p className="hero-description">
            Soy desarrollador de software con experiencia en el desarrollo de
            aplicaciones web, integración de bases de datos, despliegues en la
            nube y soluciones personalizadas. Mi enfoque está en crear software
            eficiente, escalable y adaptado a las necesidades del cliente.
          </p>
          <div className="hero-buttons">
            <a href="/cv" className="btn">
              CV
            </a>
            <a href="/contact" className="btn btn-secondary">
              Contáctame
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="hero-image" id="hero-container">
          <div className="image-wrapper">
            <img src="/cesar_foto.png" alt="Cesar Andrade" />
          </div>
        </div>
      </div>
      <span id="proyect"></span>
    </div>
  );
}

export default Menu;

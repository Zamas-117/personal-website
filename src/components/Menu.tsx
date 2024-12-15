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
            Soy un programador con conocimientos en diseño web y desarrollo de
            aplicaciones. Además, apunto hacia nuevos horizontes como la
            programación de videojuegos.
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
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/cesar_foto.png" alt="Cesar Andrade" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

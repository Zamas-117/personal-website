import "../css/Menu.css";
import { FaDownload } from "react-icons/fa";

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
            Disponible para <span className="highlight">Desarrollar.</span>
          </h2>
          <p className="hero-description">
            Soy un desarrollador de software enfocado en el desarrollo de
            aplicaciones web, integración de bases de datos y despliegues en la
            nube. Disfruto creando soluciones eficientes y adaptadas a las
            necesidades de cada proyecto.
          </p>
          <div className="hero-buttons">
            <a href="/cv-es.pdf" target="_blank" className="btn">
              <FaDownload style={{ margin: "5px 2px 0px 0px" }} />
              CV
            </a>
            <a href="#contact" className="btn btn-secondary">
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

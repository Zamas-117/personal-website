import "../css/Header.css";

type Props = {};

function Header_principal({}: Props) {
  return (
    <div id="container-header">
      <div
        className="nav justify-content-start"
        style={{ position: "fixed" }}
        id="container-name"
      >
        <a className="nav-link menu-name" aria-current="page" href="#">
          Cesar{" "}
          <span>
            <strong>Andrade</strong>
          </span>
        </a>
      </div>
      <ul className="nav " id="container-list">
        <li className="nav-item" id="list-menu">
          <a className="nav-link menu__link " aria-current="page" href="#main">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link menu__link" href="#proyect">
            Proyectos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link menu__link" href="#skills">
            Habilidades
          </a>
        </li>

        <li className="nav-item" id="img-logo">
          <a className="nav-link menu__link" href="#">
            <div className="hero-image">
              <div className="image-wrapper" id="img-wrapper">
                <img src="/cesar_foto.png" alt="Cesar Andrade" />
              </div>
            </div>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link menu__link "
            aria-disabled="true"
            href="#education"
          >
            Educacion
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link menu__link" aria-disabled="true">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header_principal;

import "../css/Header.css";

type Props = {
  name: string[];
};

function Header_principal({}: Props) {
  return (
    <div>
      <div className="nav justify-content-start" style={{ position: "fixed" }}>
        <a className="nav-link menu-name" aria-current="page" href="#">
          Cesar{" "}
          <span>
            <strong>Andrade</strong>
          </span>
        </a>
      </div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link menu__link " aria-current="page" href="#main">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link menu__link" href="#proyects">
            Proyectos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link menu__link" href="#">
            Tecnologias
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link menu__link " aria-disabled="true">
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

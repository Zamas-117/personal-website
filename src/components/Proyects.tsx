import "../css/Proyect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {};

const projects = [
  {
    id: 1,
    image: "/proyects/solid-steel/solid-steel-4.png",
    title: "E-commerce 'Solid-Steel'",
    description:
      "Aplicación de comercio electrónico para la venta de metales con integración de pagos (PayPal, Stripe), manejo de usuarios, y sistemas de envío.",
    link: "#",
    technologies: [
      "/logos/aws.png",
      "/logos/postgresql.svg",
      "/logos/google.png",
      "/logos/django.png",
      "/logos/html5.png",
      "/logos/css.png",
      "/logos/js.png",
      "/logos/paypal.png",
      "/logos/stripe.png",
    ],
    repoLink: "https://github.com/Zamas-117/Solid-Steel", // Link al repositorio
    liveLink: "", // Link al proyecto en producción
  },
  {
    id: 2,
    image: "/proyects/koko-wings/koko-wings.png",
    title: "Sitio de comida 'Koko Wings'",
    description:
      "Página web interactiva que muestra el catálogo completo de alimentos, incluyendo ofertas y variedad del menú de un restaurante.",
    link: "https://kokowings.netlify.app/",
    technologies: [
      "/logos/html5.png",
      "/logos/css.png",
      "/logos/js.png",
      "/logos/bootstrap.svg",
    ],
    repoLink: "https://github.com/Zamas-117/Koko-wings", // Link al repositorio
    liveLink: "https://kokowings.netlify.app/", // Link al proyecto en producción
  },
  {
    id: 3,
    image: "/proyects/pau/pau.png",
    title: "Blog personal 'Pausings4u'",
    description:
      "Página web diseñada para una cantante, con un blog personal y secciones para destacar su trayectoria y contenido multimedia.",
    link: " https://pausings4u.com/",
    technologies: [
      "/logos/php.png",
      "/logos/html5.png",
      "/logos/css.png",
      "/logos/js.png",
      "/logos/bootstrap.svg",
    ],
    repoLink: "https://github.com/Zamas-117/PAGUINAPAULINA", // Link al repositorio
    liveLink: "https://pausings4u.com/", // Link al proyecto en producción
  },
  {
    id: 4,
    image: "/proyects/cecyte/cecyte.png",
    title: "Sistema de cuestionarios 'CecyteC'",
    description:
      "Plataforma educativa para evaluar a los estudiantes mediante cuestionarios y determinar sus estilos de aprendizaje.",
    link: "https://cecyteccuestionarios.io/",
    technologies: [
      "/logos/php.png",
      "/logos/html5.png",
      "/logos/css.png",
      "/logos/js.png",
      "/logos/sql.png",
    ],
    repoLink: "https://github.com/Zamas-117/cecytec-cuestionarios", // Link al repositorio
    liveLink: "https://cecyteccuestionarios.io/", // Link al proyecto en producción
  },
];

function Proyects({}: Props) {
  return (
    <div className="proyects">
      <h1 id="proyects">
        <FontAwesomeIcon icon={faCode} /> Proyectos
      </h1>

      <div className="container_proyects">
        {projects.map((project) => (
          <div className="card" key={project.id} id="card-container">
            <img
              src={project.image}
              className="card-img-top"
              alt={project.title}
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>

              {/* Logos de tecnologías */}
              <div className="tech-logos">
                {project.technologies.map((tech, index) => (
                  <img
                    key={index}
                    src={tech}
                    alt={`Logo ${tech}`}
                    title={tech.split("/").pop()?.split(".")[0]} // Muestra el nombre del logo
                    className="tech-logo"
                  />
                ))}
              </div>

              {/* Botones */}
              <div className="button-container">
                {/* Botón para el repositorio de GitHub */}
                <a
                  href={project.repoLink}
                  className="btn btn-github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="github-icon" />{" "}
                  Ver Repositorio
                </a>

                {/* Botón para la página en producción */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="btn btn-live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="live-icon"
                    />
                    {""}
                    Ver Proyecto
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        <span id="skills"></span>
      </div>
    </div>
  );
}

export default Proyects;

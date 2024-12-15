import "../css/Proyect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const projects = [
  {
    id: 1,
    image: "/proyects/solid-steel/solid-steel-4.png",
    title: "E-commerce 'Solid-Steel'",
    description:
      "En este proyecto se construyó toda una aplicación web de E-commerce abarcando inicio de sesión para los usuarios hasta el envío de los productos.",
    link: "#",
    technologies: [
      "/logos/python.png",
      "/logos/aws.png",
      "/logos/html5.png",
      "/logos/css.png",
      "/logos/js.png",
      "/logos/postgresql.svg",
      "/logos/bootstrap.svg",
      "/logos/google.png",
      "/logos/paypal.png",
      "/logos/stripe.png",
    ],
  },
  {
    id: 2,
    image: "/proyects/koko-wings/koko-wings.png",
    title: "Landing Page 'Koko Wings'",
    description: "Este es un diseño de landing page responsiva para una marca.",
    link: "https://kokowings.netlify.app/",
    technologies: [
      "/logos/html5.png",
      "/logos/css.png",
      "/logos/js.png",
      "/logos/bootstrap.svg",
    ],
  },
  {
    id: 3,
    image: "/proyects/pau/pau.png",
    title: "Personal Web Site 'Pausings4u'",
    description:
      "Este es otro proyecto destacando habilidades en diseño y desarrollo.",
    link: " https://pausings4u.com/",
    technologies: [
      "/logos/php.png",
      "/logos/html5.png",
      "/logos/css.png",
      "/logos/js.png",
      "/logos/bootstrap.svg",
    ],
  },
  {
    id: 4,
    image: "/proyects/cecyte/cecyte.png",
    title: "Sistema de cuestionarios 'CecyteC'",
    description:
      "Este es otro proyecto destacando habilidades en diseño y desarrollo.",
    link: "https://cecyteccuestionarios.io/",
    technologies: [
      "/logos/php.png",
      "/logos/html5.png",
      "/logos/css.png",
      "/logos/js.png",
      "/logos/sql.png",
    ],
  },
];

function Proyects({}: Props) {
  return (
    <div className="proyects">
      <h1 id="proyects">
        <FontAwesomeIcon icon={faCode} /> Proyects
      </h1>

      <div className="container_proyects">
        {projects.map((project) => (
          <div className="card" key={project.id}>
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

              <a href={project.link} className="btn">
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyects;

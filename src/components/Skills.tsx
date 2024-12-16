import "../css/Skills.css";

type Props = {};

const skills = [
  "/logos/html5.png",
  "/logos/css.png",
  "/logos/js.png",
  "/logos/php.png",
  "/logos/postgresql.svg",
  "/logos/stripe.png",
  "/logos/paypal.png",
  "/logos/django.png",
  "/logos/cpp.png",
];
const skills2 = [
  "/logos/bootstrap.svg",
  "/logos/sql.png",
  "/logos/python.svg",
  "/logos/aws.png",
  "/logos/react.svg",
  "/logos/google.png",
  "/logos/git.png",
  "/logos/github.png",
];

function Skills({}: Props) {
  return (
    <div className="skills-carousel">
      <h1 id="skills">Habilidades</h1>
      <div className="carousel">
        {[...Array(2)].map((_, index) => (
          <div className="carousel-track" key={index}>
            {skills.map((tech, i) => (
              <img
                key={`${index}-${i}`}
                src={tech}
                alt={`Logo ${tech}`}
                title={tech.split("/").pop()?.split(".")[0]} // Muestra el nombre del logo al pasar el mouse
                className="carousel-logo"
              />
            ))}
          </div>
        ))}
      </div>

      <div className="carousel">
        {[...Array(2)].map((_, index) => (
          <div className="carousel-track" key={index}>
            {skills2.map((tech, i) => (
              <img
                key={`${index}-${i}`}
                src={tech}
                alt={`Logo ${tech}`}
                title={tech.split("/").pop()?.split(".")[0]} // Muestra el nombre del logo al pasar el mouse
                className="carousel-logo"
              />
            ))}
          </div>
        ))}
      </div>
      <span id="education"></span>
    </div>
  );
}

export default Skills;

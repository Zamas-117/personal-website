import "../css/Education.css";

type Props = {};

const education = [
  {
    id: 1,
    title: "Ingeniería de Software",
    institution: "Universidad Autónoma de Ciudad Juárez",
    period: "2020 - 2024 cursando",
    description:
      "Formación en desarrollo de software, bases de datos, metodologías ágiles y arquitectura de sistemas.",
  },
  {
    id: 2,
    title: "AWS Technical Essentials",
    institution: "AWS",
    period: "2024",
    description:
      "Introducción a los servicios principales de AWS, como cómputo, almacenamiento y redes.",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner Essentials",
    institution: "AWS",
    period: "2024",
    description:
      "Conceptos básicos de la nube de AWS, seguridad, facturación y optimización de servicios.",
  },
  {
    id: 4,
    title: "Fundamentos profesionales del desarrollo de software",
    institution: "Microsoft y LinkedIn",
    period: "2023",
    description:
      "Principios del ciclo de desarrollo, programación estructurada y buenas prácticas de código.",
  },
  {
    id: 5,
    title:
      "Introducción a las habilidades profesionales en el desarrollo de software",
    institution: "Microsoft y LinkedIn",
    period: "2023",
    description:
      "Habilidades esenciales: resolución de problemas, trabajo en equipo y metodologías ágiles.",
  },
];

function Education({}: Props) {
  return (
    <div className="education-section">
      <h1 id="education">Educación</h1>
      <div className="education-container">
        {education.map((item) => (
          <div key={item.id} className="education-item">
            <h3 className="education-title">{item.title}</h3>
            <p className="education-institution">{item.institution}</p>
            <p className="education-period">{item.period}</p>
            {item.description && (
              <p className="education-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
      <span id="contact"></span>
    </div>
  );
}

export default Education;

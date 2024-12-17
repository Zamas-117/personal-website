import "../css/Education.css";

type Props = {};

const education = [
  {
    id: 1,
    title: "Ingeniería de Software",
    institution: "Universidad Autónoma de Ciudad Juárez",
    period: "2020 - 2024 cursando",
    description:
      "Enfoque en desarrollo de software, bases de datos y metodologías ágiles.",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect – Associate",
    institution: "AWS",
    period: "2023",
    description: "Curso de certificación en arquitectura de soluciones en AWS.",
  },
  {
    id: 3,
    title: "Desarrollo Web Fullstack",
    institution: "Platzi",
    period: "2021",
    description: "Curso completo de desarrollo web con Html,Css,JavaScript.",
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

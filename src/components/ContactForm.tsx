import { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../css/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://personal-website-jfn3.onrender.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al enviar el formulario");
      }

      const data = await response.json();
      alert(data.message || "¡Mensaje enviado!");
      setFormData({ email: "", message: "" }); // Reinicia el formulario
    } catch (error) {
      // Asignar el tipo "Error" a la variable error
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      } else {
        alert("Ocurrió un error desconocido");
      }
    }
  };

  return (
    <div className="container-contact-principal">
      <h1 className="contact-title">¡Ponte en Contacto!</h1>
      <div className="contact-container">
        {/* Información de contacto con iconos */}
        <div className="contact-info">
          <p>
            <FaEnvelope className="icon" />{" "}
            <a href="mailto:andradecesar162@gmail.com">
              andradecesar162@gmail.com
            </a>
          </p>
          <p>
            <FaLinkedin className="icon" />{" "}
            <a
              href="https://www.linkedin.com/in/cesar-andrade-5a603327b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Motivo de Contacto</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí"
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

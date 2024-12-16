import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message || "¡Mensaje enviado!");
      setFormData({ email: "", message: "" }); // Reinicia el formulario
    } catch (error) {
      alert("Error al enviar el mensaje");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-200 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contáctame</h2>
      <p>
        <strong>Correo:</strong>{" "}
        <a href="mailto:andradecesar162@gmail.com" className="text-blue-500">
          andradecesar162@gmail.com
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/tu-perfil-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Visita mi LinkedIn
        </a>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block">
            Motivo de Contacto
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

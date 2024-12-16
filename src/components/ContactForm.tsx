import { useState } from "react";

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

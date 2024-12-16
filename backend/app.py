import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText

# Cargar las variables del archivo .env
load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def contact():
    data = request.json
    email = data.get('email')
    message = data.get('message')

    if not email or not message:
        return jsonify({"error": "Email y mensaje son obligatorios"}), 400

    # Cargar las credenciales desde las variables de entorno
    sender_email = os.getenv("SENDER_EMAIL")
    sender_password = os.getenv("SENDER_PASSWORD")
    receiver_email = "andradecesar162@gmail.com"  # Tu correo personal

    try:
        # Crea el correo
        msg = MIMEText(f"Mensaje enviado desde el sitio web.\n\nMensaje:\n{message}")
        msg['Subject'] = "Nuevo mensaje de contacto"
        msg['From'] = sender_email
        msg['To'] = receiver_email

        # Configura el servidor SMTP
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)
        server.quit()

        return jsonify({"message": "¡Correo enviado correctamente!"}), 200
    except Exception as e:
        return jsonify({"error": f"Error al enviar el correo: {str(e)}"}), 500

if __name__ == '__main__':
    app.run()

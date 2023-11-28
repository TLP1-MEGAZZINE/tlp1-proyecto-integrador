const nodemailer = require("nodemailer");
require('dotenv').config();

async function enviarEmail(email, newPass) {
  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, //cambiar a futuro
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSWORDEMAIL
    },
    tls: {
      rejectUnauthorized: false //cambiar a futuro
    }
  };

  const transporter = nodemailer.createTransport(config);

  const message = {
    from: process.env.USERMAIL,
    to: email,
    subject: "Codigo de verificación para restaurar su contraseña.",
    html: `<p>Su clave a sido restaurada correctamente, su contraseña para iniciar sesion es: ${newPass}</p>`
  }

  try {
    return await transporter.sendMail(message);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    throw error;
  }
}

module.exports = {
  enviarEmail
};

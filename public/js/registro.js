// MENSAJES
//input1
const userName = document.getElementById('userName');
const mensajeNombre = document.getElementById('mensajeNombre');

userName.addEventListener('focus', function () {
  mensajeNombre.style.display = 'inline';
});

userName.addEventListener('blur', function () {
  mensajeNombre.style.display = 'none';
});

//mail
const mail = document.getElementById('mail');
const mensajeMail = document.getElementById('mensajeMail');

mail.addEventListener('focus', function () {
  mensajeMail.style.display = 'inline';
});


mail.addEventListener('blur', function () {
  mensajeMail.style.display = 'none';
});

//password
const password = document.getElementById('password');
const mensajePass = document.getElementById('mensajePass');

password.addEventListener('focus', function () {
  mensajePass.style.display = 'inline';
});

password.addEventListener('blur', function () {
  mensajePass.style.display = 'none';
});

// VALIDAR REGISTRO PRUEBA
function guardarDatos(event) {
  event.preventDefault(); //evita que el formulario se envie y la pagina se cargue

  const userName = document.getElementById("userName").value
  const userMail = document.getElementById("userMail").value
  const password = document.getElementById("password").value

  const datos = {
    nombre: userName,
    mail: userMail,
    pass: password
  };

  window.location.href = "postulantes.html";
  console.log(datos);
};

module.exports = guardarDatos;
// MENSAJES
// NOMBRE USUARIO

document.addEventListener('DOMContentLoaded', function() {
  const mensajeNAME = document.getElementById('mensajeNAME');
  const mensajeEmail = document.getElementById('mensajeEmail');
  const mensajePass = document.getElementById('mensajePass');

  mensajeNAME.style.display = 'none';
  mensajeEmail.style.display = 'none';
  mensajePass.style.display = 'none';

  // NOMBRE USUARIO
  const name = document.getElementById('name');
  name.addEventListener('click', function mostrarMensaje() {
    mensajeNAME.style.display = 'inline';
  });

  name.addEventListener('blur', function ocultarMensaje() {
    mensajeNAME.style.display = 'none';
  });

  // EMAIL
  const email = document.getElementById('email');
  email.addEventListener('click', function mostrarMensaje2() {
    mensajeEmail.style.display = 'inline';
  });

  email.addEventListener('blur', function ocultarMensaje2() {
    mensajeEmail.style.display = 'none';
  });

  // PASSWORD
  const password = document.getElementById('password');
  password.addEventListener('click', function mostrarMensaje3() {
    mensajePass.style.display = 'inline';
  });

  password.addEventListener('blur', function ocultarMensaje3() {
    mensajePass.style.display = 'none';
  });


// CONDICIONES DEL NOMBRE, EMAIL Y LA CONTRASEÑA
const formRegistro = document.getElementById('formRegistro');
const validarPass = document.getElementById('validarPass');
const validarEmail = document.getElementById('validarEmail');

formRegistro.addEventListener("submit", e => {
  e.preventDefault();
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (name.value.length < 6) {
    Swal.fire({
      icon: 'ERROR',
      title: 'Oops...',
      text: '¡Nombre muy corto!',
    });
  }

  if (!regexEmail.test(email.value)) {
    Swal.fire({
      icon: 'ERROR',
      title: 'Oops...',
      text: '¡Inserte un email válido!',
    });
  }

  if (password.value.length < 9) {
    Swal.fire({
      icon: 'ERROR',
      title: 'Oops...',
      text: '¡Contraseña muy corta!',
    });
  }

  if (password.value !== validarPass.value) {
    Swal.fire({
      icon: 'ERROR',
      title: 'Oops...',
      text: '¡Las contraseñas no coinciden!',
    });
  };

  if (email.value !== validarEmail.value) {
    Swal.fire({
      icon: 'ERROR',
      title: 'Oops...',
      text: '¡El email no coincide!',
    });
  }
});
});
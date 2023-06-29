// CARGAR SPAN CON LAS VALIDACIONES

document.addEventListener('DOMContentLoaded', function() {
  const mensajeNAME = document.getElementById('mensajeNAME');
  const mensajeEmail = document.getElementById('mensajeEmail');
  const mensajePass = document.getElementById('mensajePass');

  mensajeNAME.style.display = 'none';
  mensajeEmail.style.display = 'none';
  mensajePass.style.display = 'none';

  // NOMBRE USUARIO
  const name = document.getElementById('user_name');
  name.addEventListener('click', function mostrarMensaje() {
    mensajeNAME.style.display = 'inline';
  });

  name.addEventListener('blur', function ocultarMensaje() {
    mensajeNAME.style.display = 'none';
  });

  // EMAIL
  const email = document.getElementById('user_email');
  email.addEventListener('click', function mostrarMensaje2() {
    mensajeEmail.style.display = 'inline';
  });

  email.addEventListener('blur', function ocultarMensaje2() {
    mensajeEmail.style.display = 'none';
  });

  // PASSWORD
  const password = document.getElementById('user_password');
  password.addEventListener('click', function mostrarMensaje3() {
    mensajePass.style.display = 'inline';
  });

  password.addEventListener('blur', function ocultarMensaje3() {
    mensajePass.style.display = 'none';
  });

  // CONDICIONES PARA ACEPTAR EL NOMBRE, EMAIL Y LA CONTRASEÑA
  const formRegistro = document.getElementById('formRegistro');
  const validarPass = document.getElementById('validarPass');
  const validarEmail = document.getElementById('validarEmail');

  formRegistro.addEventListener('submit', async (e) => {
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (name.value.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Nombre muy corto!',
      });
      return;
    }

    if (!regexEmail.test(email.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Inserte un email válido!',
      });
      return;
    }

    if (password.value.length < 9) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Contraseña muy corta!',
      });
      return;
    }

    if (email.value !== validarEmail.value) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡El email no coincide!',
      });
      return;
    }

    if (password.value !== validarPass.value) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Las contraseñas no coinciden!',
      });
      return;
    }

    // SE CREA EL EVENTO PARA CREAR UN NUEVO USUARIO
    const user_name = document.getElementById('user_name').value;
    const user_email = document.getElementById('user_email').value;
    const user_password = document.getElementById('user_password').value;
    console.log(user_name, user_email, user_password);

    //SE USA LA PETICION POST PARA CREAR UN USUARIO
    try {
      const res = await fetch('http://localhost:5000/registro-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_name, user_email, user_password })
      });

      const data = await res.json();
      console.log({ data });

      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado',
        text: 'El usuario se ha creado correctamente'
      });

      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'No se pudo crear el usuario'
      });
    }
  });
});

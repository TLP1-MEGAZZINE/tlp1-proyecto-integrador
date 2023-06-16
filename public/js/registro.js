// MENSAJES
// NOMBRE USUARIO
const name = document.getElementById('name');
name.addEventListener('focus', function mostrarMensaje() {
  const mensajeNAME = document.getElementById('mensajeNAME');
  mensajeNAME.style.display = 'inline';
})
name.addEventListener('blur', function ocultarMensaje() {
  mensajeNAME = document.getElementById('mensajeNAME');
  mensajeNAME.style.display = 'none';
})

//EMAIL
const email = document.getElementById('email');
email.addEventListener('focus', function mostrarMensaje2() {
  const mensajeEmail = document.getElementById('mensajeEmail');
  mensajeEmail.style.display = 'inline';
})
email.addEventListener('blur', function ocultarMensaje2() {
  mensajeEmail = document.getElementById('mensajeEmail');
  mensajeEmail.style.display = 'none';
})

const password = document.getElementById('password');
password.addEventListener('focus', function mostrarMensaje3() {
  const mensajePass = document.getElementById('mensajePass');
  mensajePass.style.display = 'inline';
})
password.addEventListener('blur', function mostrarMensaje3() {
  mensajePass = document.getElementById('mensajePass');
  mensajePass.style.display = 'none';
})

// CONDICIONES DEL NOMBRE, EMAIL Y LA CONTRASEÑA
const formRegistro = document.getElementById('formRegistro');
const validarPass = document.getElementById('validarPass');
const validarEmail = document.getElementById('validarEmail');

formRegistro.addEventListener("submit", e => {
  e.preventDefault();
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (name.value.length < 6) {
    alert("Nombre muy corto!")
  }

  if (!regexEmail.test(email.value)) {
    alert("Incerte un email valido!")
  }

  if (password.value.length < 9) {
    alert("Contraseña muy corta!")
  }

  if (password.value !== validarPass.value) {
    alert("Contraseña no coincide!")
  }

  if (email.value !== validarEmail.value) {
    alert("Email no coincide!")
  }

});


// CONDICION PARA QUE NO DEJE REGISTRARSE SI FALTA RELLENAR UN CAMPO
if (name.value !== '' & email.value !== '' & password.value !== '') {
  const registro = document.getElementById("registro");
  registro.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "login.html";
  })
}

// ALMACENAR VALORES EN OBJETO
const datos = {
  name: '',
  email: '',
  password: ''
};

datos.name = name.value;
datos.email = email.value;
datos.password = password.value;

export default datos;
// Validación de nombre de usuario
const usernameInput = document.getElementById('usernameInput');

function validateUsername() {
  const username = usernameInput.value.trim();

  if (username === '') {
    alert('Por favor, ingrese un nombre de usuario o correo válido.');
    return false;
  }

  return true;
}

// Validación de contraseña
const passwordInput = document.getElementById('passwordInput');

function validatePassword() {
  const password = passwordInput.value;

  if (password.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres.');
    return false;
  }

  return true;
}

// Validación al hacer clic en el botón de enviar
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
  if (!validateUsername() || !validatePassword()) {
    event.preventDefault();
  }
});

import datos from "./registro";

console.log(datos.name);
console.log(datos.name);
console.log(datos.name);
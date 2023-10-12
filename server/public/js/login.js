

function ocultarContraseña(button) {
  const passwordInput = document.getElementById("contraseña");
  const eyeIcon = document.querySelector("i");
  // Obtener los valores de los inputs
  if (!eyeIcon) {
    console.error("El elemento con la clase 'bi-eye' no se encontró en el DOM.");
    return;
  }

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("bi-eye");
    eyeIcon.classList.add("bi-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("bi-eye-slash");
    eyeIcon.classList.add("bi-eye");
  }
}

function guardarEnLocalStorage() {
  // Obtener el estado del checkbox
  const checkbox = document.getElementById("recuerdameCheckbox");
  const estaMarcado = checkbox.checked;

  // Si el checkbox está marcado, guardar los valores en localStorage
  if (estaMarcado) {
    localStorage.setItem("nombreEmail", user_name || user_email);
    localStorage.setItem("contrasena", contrasena);
    alert("Valores guardados en localStorage.");
  } else {
    alert("El checkbox no está marcado. No se guardarán los valores.");
  }
}


const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user_name = document.getElementById("nombreEmail").value;
const user_email = document.getElementById("nombreEmail").value;
const user_password = document.getElementById('contraseña').value;

  const respuesta = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_name, user_email, user_password })
  });

  if (!respuesta.ok) {
    const { message } = await respuesta.json();
    return Swal.fire('Error, datos incorrectos', message, 'error',);
  } else {
    const { message, token } = await respuesta.json();

    Swal.fire({
      title: "Correcto, iniciando sesion.",
      text: "Espero un momento...",
      icon: "success",
      showConfirmButton: false
    });

    // Se almacena el token en el local storage
    localStorage.setItem('token', token);

    // Redireccionar a la vista de tareas
    setTimeout(() => {
      window.location.href = '/inicio';
    }, 2000);
  }
});
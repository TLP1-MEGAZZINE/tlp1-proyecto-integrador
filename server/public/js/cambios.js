// const UsuarioNombre = document.getElementById("UsuarioNombre")
const token = window.localStorage.getItem('token')
console.log(token);

fetch('/validar-token', {
  method: 'GET',
  headers: {
    'authorization': token
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Procede a trabajar con la respuesta de la solicitud
  })
  .catch(error => {
    console.error('Error:', error);
  });

document.addEventListener('DOMContentLoaded', async () => {

  try {
    const respuesta = await fetch('/ruta-protegida', {
      method: 'GET',
      headers: {
        'authorization': token
      }
    });

    if (respuesta.ok) {
      // La solicitud fue exitosa, puedes continuar con el contenido de la página

    } else {
      // La solicitud no fue exitosa, maneja el error si es necesario
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
});

const cerrarSesion = document.getElementById("cerrarSesion")

cerrarSesion.addEventListener("click", async () => {
  try {
    const response = await fetch('/cerrar-sesion', {
      method: 'GET'
    });

    if (response.ok) {
      Swal.fire({
        icon: 'Success',
        title: 'Cerrando Sesión',
        text: 'Espere un momento...',
        showConfirmButton: false
      });

      setTimeout(() => {
        window.location.href = '/index';
      }, 2000); // 2 segundos

    } else {
      console.error('Error al cerrar sesión');
    }
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
});
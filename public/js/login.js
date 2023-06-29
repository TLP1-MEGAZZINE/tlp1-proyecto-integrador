// VALIDACION DE NOMBRE DE USUARIO Y CONTRASEÑA

const nombreEmail = document.getElementById('nombreEmail').value
const contraseña = document.getElementById('contraseña').value



formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
//SE USA LA PETICION POST PARA CREAR UN USUARIO
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombreEmail, contraseña })
      });

      const data = await res.json();
      console.log({ data });

      Swal.fire({
        icon: 'success',
        title: 'Credenciales correctas',
        text: '¡Iniciando sesión!...'
      });

      // setTimeout(() => {
      //   window.location.href = '/inicio';
      // }, 2000);
    } catch (error) {

      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: '¡Las credenciales no coinciden!',
      });

    }
  });
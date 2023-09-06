// const UsuarioNombre = document.getElementById("UsuarioNombre")

// document.addEventListener('DOMContentLoaded', async () => {
//     const token = localStorage.getItem('token'); // Obtén el token del localStorage

//     try {
//       const respuesta = await fetch('/ruta-protegida', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       if (respuesta.ok) {
//         // La solicitud fue exitosa, puedes continuar con el contenido de la página
//       } else {
//         // La solicitud no fue exitosa, maneja el error si es necesario
//       }
//     } catch (error) {
//       console.error('Error al realizar la solicitud:', error);
//     }
//   });

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
                text: 'Espere un momento...'
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
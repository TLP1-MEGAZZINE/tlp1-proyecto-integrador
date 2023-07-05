const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user_name = document.getElementById('nombreEmail').value;
  const user_password = document.getElementById('contraseña').value;

    const respuesta = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_name, user_password })
    });

if(!respuesta.ok) {
  const { message } = await respuesta.json();
  return Swal.fire('Error', message, 'error');
}


const { message, token } = await respuesta.json();
Swal.fire('Correcto', message, 'success');

// Se almacena el token en el local storage
localStorage.setItem('token', token);

// Redireccionar a la vista de tareas
setTimeout(() => {
    window.location.href = '/inicio';
}, 2000);
});
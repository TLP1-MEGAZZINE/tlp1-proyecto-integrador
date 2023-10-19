const formPost = document.getElementById('formPost');

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();

  const post_title = document.getElementById("post_title").value;
  const post_content = document.getElementById("post_content").value;

  const postData = {
    post_title,
    post_content,
  }

  const respuesta = await fetch('/createPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  });

  if (!respuesta.ok) {
    const { message } = await respuesta.json();
    return Swal.fire('Error, datos incorrectos', message, 'error',);
  } else {
    const { token } = await respuesta.json();

    console.log(token);

    Swal.fire({
      title: "Correcto, iniciando sesion.",
      text: "Espero un momento...",
      icon: "success",
      showConfirmButton: false
    });

    // Redireccionar a la vista de tareas
    setTimeout(() => {
      window.location.href = '/inicio';
    }, 2000);
  }
  
});
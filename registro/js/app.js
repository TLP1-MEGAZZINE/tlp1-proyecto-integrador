

const input = document.getElementById('input');
input.addEventListener('focus',function mostrarMensaje(){
 const mensaje = document.getElementById('mensaje');
 mensaje.style.display='inline';
})
input.addEventListener('blur',function ocultarMensaje(){
  const mensaje = document.getElementById('mensaje');
  mensaje.style.display='none';
 })





  //input2
 

 const input2 = document.getElementById('input2');
  input2.addEventListener('focus',  function mostrarMensaje2() {
    const mensaje2 = document.getElementById('mensaje2');
    mensaje2.style.display = 'inline';
  })
  input2.addEventListener('blur',function ocultarMensaje2() {
    const mensaje2 = document.getElementById('mensaje2');
    mensaje2.style.display = 'none';
  })
 


  const input3 = document.getElementById('input3');
  input3.addEventListener('focus', function mostrarMensaje3(){
    const mensaje3 = document.getElementById('mensaje3');
    mensaje3.style.display='inline';
  })
  input3.addEventListener('blur', function mostrarMensaje3(){
    const mensaje3 = document.getElementById('mensaje3');
    mensaje3.style.display='none';
  })






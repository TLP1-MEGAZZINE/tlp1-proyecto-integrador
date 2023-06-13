//input1
const input = document.getElementById('miInput');
const mensaje = document.getElementById('mensaje');

 

  input.addEventListener('blur', function() {
    mensaje.style.display = 'none';
  });
   input.addEventListener('focus', function() {
    mensaje.style.display = 'inline';
  });
  //input2
  const input2 = document.getElementById('input2');
  const mensaje2 = document.getElementById('mensaje2');

  input2.addEventListener('focus', function() {
    mensaje2.style.display = 'inline';
  });

  input2.addEventListener('blur', function() {
    mensaje2.style.display = 'none';
  });
  //input3
  const input3 = document.getElementById('input3');
  const mensaje3 = document.getElementById('mensaje3');

  input3.addEventListener('focus', function() {
    mensaje3.style.display = 'inline';
  });

  input3.addEventListener('blur', function() {
    mensaje3.style.display = 'none';
  });



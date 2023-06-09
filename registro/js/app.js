let opcionPais=document.getElementById("pais");
let opcionProvincia=document.getElementById("provincia");
 opcionPais.addEventListener('change',()=>{
 let valorSelector=document.getElementById("pais").value
 let argentina= `
 <option selected disabled>Provincia</option>
 <option value="1">Buenos Aires</option>
 <option value="2">Catamarca</option>
 <option value="3">Chaco</option>
 <option value="4">Chubut</option>
 <option value="5">Cordoba</option>
 <option value="6">Córrientes</option>
 <option value="7">Entre Ríos</option>
 <option value="8">Formosa</option>
 <option value="9">Jujuy</option>
 <option value="10">La Pampa</option>
 <option value="11">La Rioja</option>
 <option value="12">Mendoza</option>
 <option value="13">Misiones</option>
 <option value="14">Neuquen</option>
 <option value="15">Río Negro</option>
 <option value="16">Salta</option>
 <option value="17">San Juan</option>
 <option value="18">San Luis</option>
 <option value="19">Santa Cruz</option>
 <option value="20">Santa Fe</option>
 <option value="21">Santiago del Estero</option>
 <option value="22">Tierra del Fuego</option>
 <option value="22>Tucuman</option>`
 if(valorSelector == 1){
    opcionProvincia.innerHTML = "";
    opcionProvincia.insertAdjacentHTML("beforeend",argentina); 
 }
 else{

 }
})
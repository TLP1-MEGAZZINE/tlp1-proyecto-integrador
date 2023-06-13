//opcion registro postulante/empleador comercial y no comercial
let opcionRegitro=document.getElementById("opccionRol")
 opcionRegitro.addEventListener('change',()=>{
 let valorSelect=document.getElementById("opccionRol").value
 if(valorSelect==1){
    let Educacion=document.getElementById("educacion");
    let contenedor=document.getElementById("estadoLaboral");
    rubro.innerHTML=" "
    contenedor.innerHTML+=`
   
    <div class="col-md-10 p-1">
    <select for="validationDefault01" class="form-select" aria-label="Default select example" required>
    <option selected>estado laboral</option>
    <option value="1">desempleado</option>
    <option value="2">actualmente trabajando</option>
    </select>
    </div>
    <div class="col-md-10 p-2">
    <select for="validationDefault01" class="form-select" aria-label="Default select example" required>
    <option selected>Educacion</option>
    <option value="1">Secundario completo</option>
    <option value="2">Secundario incompleto</option>
    <option value="1">Terciario completo</option>
    <option value="3">Terciario incompleto</option>
    </select>
    </div>`
 }else if(valorSelect==2){  
    let Rubro=document.getElementById("rubro");
    estadoLaboral.innerHTML=" ";
    Rubro.innerHTML+=`<div class="col-md-10">
    <label for="validationDefault01" class="form-label">rubro</label>
    <input
      type="text"
      class="form-control"
      id="validationDefault01"
      placeholder="carniceria"
      value="carniceria"
      required
    />
  </div> <div class="col-md-10">
    <label for="validationDefault01" class="form-label">Ubicacion de la empresa</label>
    <input
      type="text"
      class="form-control"
      id="validationDefault01"
      placeholder="mz33 cs44 barrio xxx"
      value="mz33 cs44 barrio xxx"
      required
    />
    </div></div>
    <div class="col-md-10">
      <label for="validationDefaultUsername" class="form-label">numero de telefono Empresarial</label>
      <div class="input-group">
        <span class="input-group-text" id="inputGroupPrepend2">+54-3704</span>
        <input type="number" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" value="244519" required>
      </div>`
 }else{
  estadoLaboral.innerHTML=" ";
  rubro.innerHTML=" ";
 }
});
//opcion elegir la provinvia/pais en la que habita
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





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
    estadoLaboral.innerHTML=" "
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
  </div>`
 }else{
  estadoLaboral.innerHTML=" "
 }
});


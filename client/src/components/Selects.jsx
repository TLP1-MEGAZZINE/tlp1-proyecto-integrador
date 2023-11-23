
import { useEffect, useState } from "react";
import { fetchFunction } from "../api/apiFetch";

export const Selects = ({ label, placeholder, position, itemName, url, name, value, onChange }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
        try {
            const resultado = await fetchFunction(url , "GET");
            setData(resultado);
        } catch (error) {
            console.log("Hubo un error:", error);
        }
    };
    obtenerDatos();
}, []);

console.log("data", data);

  return (
    <div className="col-md-6 px-1">
      <label className="form-label">{label}</label>
      <select name={name} className="form-select" aria-label="Default select example"
        value={value}
        onChange={onChange}
        required>

        <option selected disabled>{placeholder}</option>
        {
          data.map((item, id) => (
            <option key={id} value={item[position]}>{item[itemName]}</option>
          ))
        }
      </select>
    </div>
  )
}

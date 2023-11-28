
import { useEffect, useState } from "react";
import { fetchFunction } from "../api/apiFetch";

export const Selects = ({ label, placeholder, position, itemName, url, name, value, onChange, required }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const resultado = await fetchFunction(url, "GET");
        setData(resultado);
      } catch (error) {
        console.log("Hubo un error:", error);
      }
    };
    obtenerDatos();
  }, []);

  console.log("data", data);

  return (
    <div className={required == false ? "col-md-6 px-1" : "px-1"}>
      {
        required == false ?
          (
            <label className="form-label">{label}</label>
          ) :
          ""
      }
      <select name={name} className="form-select" aria-label="Default select example"
        value={value}
        onChange={onChange}
        required>
        {required == false ? (
          <option selected disabled>{placeholder}</option>
        ) :
          <option>{placeholder}</option>
        }

        {
          data.map((item, id) => (
            <option key={id} value={item[position]}>{item[itemName]}</option>
          ))
        }
      </select>
    </div>
  )
}

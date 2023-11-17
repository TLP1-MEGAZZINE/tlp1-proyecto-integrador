import { useFetchData } from "../hooks/useFetchGet";
import { useForm } from "../hooks/useForms"

export const Selects = ({ label, placeholder, position, itemName, url, name, value, onChange }) => {

  const { form, handleInputChange } = useForm({})

  const data = useFetchData(url)
  // console.log(data);
  // console.log("form", form);

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

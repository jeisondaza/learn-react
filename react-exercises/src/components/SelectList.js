import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

function SelectList({ title, url, handleChange }) {
  const { data, error, loading } = useFetch(url);
  //   console.log(data, error, loading);

  if (!data) return null;
  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor={"#dc3545"}
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title];

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={title} id={id} onChange={handleChange}>
        <option value="">Seleccione...</option>
        {data &&
          options.map((el) => (
            <option value={el} key={options.indexOf(el)}>
              {el}
            </option>
          ))}
      </select>
    </>
  );
}

export default SelectList;

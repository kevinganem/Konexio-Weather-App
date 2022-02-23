// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      HOME.JS     ------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
// ROUTER

// CONTEXT
import { CityContext } from "../context/CityContext";
// CSS

// COMPONENTS
import API from "../components/API";
// VIEWS

export default function Home() {
  const [Search, setSearch] = useState("");
  const cityInfo = useContext(CityContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const handleSearch = (event) => {
    return setSearch(event.target.value);
  };
  const handleCity = () => {
    cityInfo.setCity(Search);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("city", {
            required: "This is required",
          })}
          placeholder="Type a city"
          type="text"
          onChange={handleSearch}
        />
        {<span>{errors.city?.message}</span>}
        <button onClick={handleCity}>Search</button>
      </form>
      <API></API>
    </>
  );
}

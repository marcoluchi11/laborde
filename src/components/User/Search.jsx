import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
const Formulario = styled.form`
  display: flex;
  justify-content: center;
  margin: 3rem;
  input[type="text"] {
    width: 25vw;
    margin: 0 1rem;
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.44);
    -webkit-box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.44);
    -moz-box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.44);
  }
  input[type="submit"] {
    border: none;
    padding: 0.3rem 1rem;

    background-color: #00000044;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const Search = () => {
  const { search, setSearch } = useContext(LabordeContext);
  const handleChange = (e) => setSearch(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <Formulario onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="name"
        value={search}
        onChange={handleChange}
      />

      <input type="submit" value="Buscar" id="search" />
    </Formulario>
  );
};

export default Search;

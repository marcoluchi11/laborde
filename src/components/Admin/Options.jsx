import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: #090909;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  button {
    cursor: pointer;
    outline: 0;
    border: 0;
    background-color: #fff;
    color: #000;
    padding: 1rem;
    margin: 1rem;
    border-radius: 10px;
  }
`;
const Options = () => {
  return (
    <Container>
      <Link to="/admin/add">
        <button>Agregar Libro</button>
      </Link>
      <Link to="/admin/delete">
        <button>Eliminar Libro</button>
      </Link>
      <Link to="/admin/update">
        <button>Actualizar Precios</button>
      </Link>
      <button>Ver Listado</button>
    </Container>
  );
};

export default Options;

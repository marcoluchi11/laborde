import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LabordeContext } from "../../../context/LabordeContext";

const Lista = styled.ul`
  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
  }
  display: flex;
  flex-direction: column;
  font-weight: 300;
  color: #000;
  list-style-type: none;
  margin-right: 5rem;
  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }

  li {
    margin: 0.5rem;

    cursor: pointer;
  }
`;
const Menu = () => {
  const { cart } = useContext(LabordeContext);
  return (
    <Lista>
      <Link to="/">
        <li>Inicio</li>
      </Link>
      <Link to="/who">
        <li>Quienes Somos</li>
      </Link>
      <li>Contacto</li>
      <Link to="/cart">
        <li>Carrito ({cart.length})</li>
      </Link>
    </Lista>
  );
};

export default Menu;

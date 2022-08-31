import { Link } from "react-router-dom";
import styled from "styled-components";

const Lista = styled.ul`
  display: flex;
  align-items: center;
  color: #000;
  list-style-type: none;
  margin-right: 5rem;
  a {
    text-decoration: none;
  }

  li {
    margin: 0.5rem;
    font-weight: 600;
    cursor: pointer;
  }
`;
const Menu = () => {
  return (
    <Lista>
      <Link to="/">
        <li>Inicio</li>
      </Link>

      <Link to="/who">
        <li>Quienes Somos</li>
      </Link>
      <li>Contacto</li>
      <li>Carrito</li>
    </Lista>
  );
};

export default Menu;

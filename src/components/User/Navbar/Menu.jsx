import styled from "styled-components";

const Lista = styled.ul`
  display: flex;
  align-items: center;
  color: #000;
  list-style-type: none;
  margin-right: 5rem;
  li {
    margin: 0.5rem;
    font-weight: 600;
    cursor: pointer;
  }
`;
const Menu = () => {
  return (
    <Lista>
      <li>Inicio</li>
      <li>Quienes Somos</li>
      <li>Contacto</li>
      <li>Carrito</li>
    </Lista>
  );
};

export default Menu;

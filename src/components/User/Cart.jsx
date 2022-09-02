import { nanoid } from "nanoid";
import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
const Pagar = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  margin: 1rem;
  padding: 0.5rem;
  background-color: limegreen;
  color: #fff;
  border-radius: 5px;
  transition: 1s background-color ease;
  transition: 1s color ease;
  &&:hover {
    background-color: #fff;
    color: limegreen;
  }
`;

const Cart = () => {
  const { cart } = useContext(LabordeContext);
  if (cart.length === 0)
    return (
      <div>
        <h1>No hay elementos en el carrito</h1>
      </div>
    );
  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((elem) => (
        <div key={nanoid()}>
          <h3>{elem.title}</h3>
          <small>{elem.isbn}</small>
          <h3>{elem.price}</h3>
        </div>
      ))}
      <Pagar>PAGAR</Pagar>;
    </div>
  );
};

export default Cart;

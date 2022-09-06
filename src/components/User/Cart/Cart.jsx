import { nanoid } from "nanoid";
import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../../context/LabordeContext";
const Container = styled.section`
  background-color: #fff;
  margin: 0 1rem;
  border-radius: 10px;
  color: #000;
  h1 {
    text-align: center;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
  }
  img {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
  }
  h3 {
    margin-bottom: 1rem;
    padding: 0;
  }
`;
const NoProducts = styled.section`
  background-color: #fff;
  margin: 0 1rem;
  border-radius: 10px;
  color: #000;
  text-align: center;
  height: 50vh;
  h1 {
    padding: 1rem;
  }
`;
const Pagar = styled.button`
  outline: 0;
  border: 0;
  display: flex;
  justify-content: flex-end;
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
      <NoProducts>
        <h1>No hay elementos en el carrito...</h1>
      </NoProducts>
    );
  return (
    <Container>
      <h1>Carrito</h1>
      <Form method="GET" action="http://localhost:4000/payment">
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        {cart.map((elem) => (
          <Item key={nanoid()}>
            <div>
              <h3>Imagen</h3>
              <img src={elem.image} alt="imagen" />
            </div>
            <div>
              <h3>Titulo</h3>
              <h3>{elem.title}</h3>
            </div>
            <div>
              <h3>Codigo ISBN</h3>
              <h3>Codigo ISBN:{elem.isbn}</h3>
            </div>
            <div>
              <h3>Precio</h3>
              <h2>{elem.price}</h2>
            </div>
          </Item>
        ))}
        <Pagar formTarget="_blank" type="submit">
          PAGAR
        </Pagar>
      </Form>
    </Container>
  );
};

export default Cart;

import { nanoid } from "nanoid";
import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../../context/LabordeContext";
import Payment from "./Payment";
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
  width: 100%;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e6e6e6;
  @media (max-width: 720px) {
    h3 {
      font-size: 0.9rem;
    }
    h2 {
      font-size: 1rem;
    }
    .isbn {
      display: none;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
    width: 15rem;
    height: 11rem;
  }
  div.image {
    align-items: center;
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
  h3.price {
    color: #333;
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
        {cart.map((elem, index) => (
          <Item key={nanoid()}>
            <div className="image">
              <h3>Item #{index + 1}</h3>
              <img src={elem.image} alt="imagen" />
            </div>
            <div>
              <h3>Título</h3>
              <h3>{elem.title}</h3>
            </div>
            <div className="isbn">
              <h3>Código ISBN</h3>
              <h3>{elem.isbn}</h3>
            </div>
            <div>
              <h3 className="price">Precio</h3>
              <h2>{elem.price}</h2>
            </div>
          </Item>
        ))}
        <Payment />
      </Form>
    </Container>
  );
};

export default Cart;

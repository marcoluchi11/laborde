import { nanoid } from "nanoid";
import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
import data from "./../../bookdata.json";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  margin: 1rem;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  img {
    cursor: pointer;
    max-width: 100%;
    max-height: 100%;
  }
  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 160px;
    height: 1.2em;
    white-space: nowrap;
  }
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 160px;
    height: 1.2em;
    white-space: nowrap;
    font-weight: 100;
  }
`;
const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;
const DivTitle = styled.div``;
const Agregar = styled.button`
  outline: none;
  border: none;
  background-color: #26b16d;
  color: #fff;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 0.5rem;
  cursor: pointer;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
`;
const Cards = () => {
  const { setCart, cart } = useContext(LabordeContext);
  const handleCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div>
      <div>
        <Title>Los mas buscados</Title>
      </div>
      <Container>
        {data.map((elem) => (
          <Card key={nanoid()}>
            <div>
              <img src={elem.image} alt="holis" />
            </div>
            <h3>{elem.title}</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
              reprehenderit tempora velit exercitationem deserunt perferendis
              facilis eveniet commodi eligendi impedit!
            </p>
            <small>ISBN: {elem.isbn}</small>
            <h4>{elem.price}</h4>
            <DivButton>
              <Agregar onClick={() => handleCart(elem)}>
                Agregar al carrito
              </Agregar>
            </DivButton>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Cards;
// DISEÑAR CARDS
// ACOMODAR CONTACT
// MEJORAR FOOTER
// MAS LINDO <NAVBAR
// QUE SEA TODO BIEN RESPONSIVE

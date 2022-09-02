import { nanoid } from "nanoid";
import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
import data from "./../../bookdata.json";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 25%;
  margin: 1rem;
  border: 1px solid black;
  img {
    cursor: pointer;
  }
`;

const Cards = () => {
  const { setCart, cart } = useContext(LabordeContext);
  const handleCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div>
      <h1>Los mas buscados</h1>

      <Container>
        {data.map((elem) => (
          <Card key={nanoid()}>
            <img
              onClick={() => handleCart(elem)}
              src="https://picsum.photos/200
  "
              alt="holis"
            />
            <h3>{elem.title}</h3>
            <small>{elem.isbn}</small>
            <p>{elem.price}</p>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Cards;

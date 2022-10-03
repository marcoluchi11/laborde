import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
import { getCategory } from "../helpers";

const Container = styled.div`
  @media (min-width: 720px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div.imagen {
    margin: 1rem;
    padding: 1rem;
    img {
      border-radius: 10px;
      width: 20rem;
      height: 20rem;
    }
  }
`;
const Atras = styled.button`
  cursor: pointer;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
`;
const Agregar = styled.button`
  outline: none;
  border: none;
  width: 100%;
  font-size: 1rem;
  background-color: #26b16d;
  color: #fff;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 1rem;
  cursor: pointer;
`;
const CardDetail = () => {
  const { cardDetail, setCardDetail } = useContext(LabordeContext);
  return (
    <Container>
      <div className="imagen">
        <img src={cardDetail.image} alt="" />
      </div>
      <div>
        <h4>{getCategory(cardDetail.category)}</h4>
        <h1>{cardDetail.title}</h1>
        <h3>{cardDetail.author.toUpperCase()}</h3>
        <p>{cardDetail.desc}</p>
        <small>Año de Publicacion: {cardDetail.published}</small>
        <h3>${cardDetail.price}</h3>
        <Agregar>Agregar al Carrito</Agregar>
        <Atras onClick={() => setCardDetail(false)}>Atrás</Atras>
      </div>
    </Container>
  );
};

export default CardDetail;

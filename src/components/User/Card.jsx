import { nanoid } from "nanoid";
import styled from "styled-components";
import { getCategory } from "../helpers";
export const Item = styled.div`
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
    height: 15rem;
    width: 15rem;
  }
  h3 {
    margin: 0;
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
  .category {
    color: #998;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
`;
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;
export const Agregar = styled.button`
  outline: none;
  border: none;
  background-color: #26b16d;
  color: #fff;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 0.5rem;
  cursor: pointer;
`;
const Card = ({ elem, handleCart }) => {
  return (
    <Item key={nanoid()}>
      <div>
        <img src={elem.image} alt="holis" />
      </div>
      <small className="category">{getCategory(elem.category)}</small>
      <h3>{elem.title}</h3>
      <h5>{elem.author.toUpperCase()}</h5>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
        reprehenderit tempora velit exercitationem deserunt perferendis facilis
        eveniet commodi eligendi impedit!
      </p>
      <small>ISBN: {elem.isbn}</small>
      <h4>${elem.price}</h4>
      <DivButton>
        <Agregar onClick={() => handleCart(elem)}>Agregar al carrito</Agregar>
      </DivButton>
    </Item>
  );
};

export default Card;

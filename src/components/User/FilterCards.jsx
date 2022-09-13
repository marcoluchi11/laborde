import { nanoid } from "nanoid";
import { Agregar, DivButton, Item } from "./Card";

const FilterCards = ({ elem, handleCart }) => {
  return (
    <Item key={nanoid()}>
      <div>
        <img src={elem.image} alt="holis" />
      </div>
      <h3>{elem.title}</h3>
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

export default FilterCards;

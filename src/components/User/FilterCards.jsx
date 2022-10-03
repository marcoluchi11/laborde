import { nanoid } from "nanoid";
import { useContext } from "react";
import { LabordeContext } from "../../context/LabordeContext";
import { getCategory } from "../helpers";
import { Agregar, DivButton, Item } from "./Card";

const FilterCards = ({ elem, handleCart }) => {
  const { setCardDetail } = useContext(LabordeContext);
  const handleClick = (elem) => {
    setCardDetail(elem);
  };
  return (
    <Item key={nanoid()}>
      <div>
        <img onClick={() => handleClick(elem)} src={elem.image} alt="holis" />
      </div>
      <small className="category">{getCategory(elem.category)}</small>
      <h3 onClick={() => handleClick(elem)}>{elem.title}</h3>
      <h5>{elem.author.toUpperCase()}</h5>
      <small>ISBN: {elem.isbn}</small>
      <h4>${elem.price.toFixed(2)}</h4>
      <DivButton>
        <Agregar onClick={() => handleCart(elem)}>Agregar al carrito</Agregar>
      </DivButton>
    </Item>
  );
};

export default FilterCards;

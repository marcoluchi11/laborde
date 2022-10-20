import { nanoid } from "nanoid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LabordeContext } from "../../context/LabordeContext";
import { getCategory } from "../helpers";
import { Agregar, DivButton, Item } from "../User/Cards/Card";

const FilterCards = ({ elem, handleCart }) => {
  const { setCardDetail } = useContext(LabordeContext);
  const handleClick = (elem) => {
    setCardDetail(elem);
  };
  return (
    <Item key={nanoid()}>
      <div>
        <Link to={`/${elem.id}`}>
          <img onClick={() => handleClick(elem)} src={elem.image} alt="cover" />
        </Link>
      </div>
      <small className="category">{getCategory(elem.category)}</small>
      <Link to={`/${elem.id}`}>
        <h3 onClick={() => handleClick(elem)}>{elem.title}</h3>
      </Link>
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

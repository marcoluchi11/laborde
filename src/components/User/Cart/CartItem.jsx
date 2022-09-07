import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../../context/LabordeContext";
const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const IconDelete = styled.img`
  width: 3rem !important;
  height: 3rem !important;
  align-items: center;
  cursor: pointer;
`;
const CartItem = ({ elem, index }) => {
  const { cart, setCart } = useContext(LabordeContext);
  const handleDelete = (elem) => {
    const cartUpdated = cart.filter((item) => item.id !== elem.id);
    setCart(cartUpdated);
  };
  return (
    <>
      <div className="image">
        <h3>Item #{index + 1}</h3>
        <img className="item" src={elem.image} alt="imagen" />
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
      <IconContainer>
        <h3>Eliminar</h3>
        <IconDelete
          onClick={() => handleDelete(elem)}
          src="https://icongr.am/fontawesome/trash-o.svg?size=14&color=currentColor"
          alt="icon"
        />
      </IconContainer>
    </>
  );
};

export default CartItem;

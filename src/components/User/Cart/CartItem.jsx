import { useContext } from "react";
import { LabordeContext } from "../../../context/LabordeContext";

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
      <div>
        <h3>Eliminar</h3>
        <h3 onClick={() => handleDelete(elem)}>X</h3>
      </div>
    </>
  );
};

export default CartItem;

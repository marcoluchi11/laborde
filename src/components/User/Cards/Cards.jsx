import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../../context/LabordeContext";
import Spinner from "../../Spinner";
import BookList from "../BookList";
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
`;
const Cards = () => {
  const { setCart, cart, setTotal, total, loading, getLocal, setSuccess } =
    useContext(LabordeContext);
  useEffect(() => {
    getLocal();
    //eslint-disable-next-line
  }, []);
  const handleCart = (item) => {
    setTotal(total + item.price);

    setCart([...cart, { ...item, id: nanoid() }]);
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...item, id: nanoid() }])
    );
    setSuccess({ state: true, message: "Agregado al carrito con exito" });
    setTimeout(() => {
      setSuccess({ state: false, message: "" });
    }, 3000);
  };
  return (
    <div>
      <div>
        <Title>Los más buscados</Title>
      </div>
      <Container>
        {loading ? <Spinner /> : <BookList handleCart={handleCart} />}
      </Container>
    </div>
  );
};

export default Cards;

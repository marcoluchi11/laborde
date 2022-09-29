import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../context/LabordeContext";
import Spinner from "../Spinner";
import Card from "./Card";
import FilterCards from "./FilterCards";

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
  const {
    setCart,
    cart,
    setTotal,
    total,
    booklist,
    filterBooks,
    loading,
    getLocal,
  } = useContext(LabordeContext);
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
  };
  return (
    <div>
      <div>
        <Title>Los más buscados</Title>
      </div>
      <Container>
        {loading ? (
          <Spinner />
        ) : filterBooks.length === 0 ? (
          booklist.map((elem) => (
            <Card key={nanoid()} elem={elem} handleCart={handleCart} />
          ))
        ) : (
          filterBooks.map((elem) => (
            <FilterCards key={nanoid()} elem={elem} handleCart={handleCart} />
          ))
        )}
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

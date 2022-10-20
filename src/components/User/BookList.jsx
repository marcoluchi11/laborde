import { nanoid } from "nanoid";
import { useContext } from "react";
import CardDetail from "../User/Cards/CardDetail";
import { LabordeContext } from "../../context/LabordeContext";
import Card from "../User/Cards/Card";
import FilterCards from "./FilterCards";
const BookList = ({ handleCart }) => {
  const { filterBooks, booklist, cardDetail } = useContext(LabordeContext);
  if (cardDetail) return <CardDetail />;
  return filterBooks.length === 0
    ? booklist.map((elem) => (
        <Card key={nanoid()} elem={elem} handleCart={handleCart} />
      ))
    : filterBooks.map((elem) => (
        <FilterCards key={nanoid()} elem={elem} handleCart={handleCart} />
      ));
};

export default BookList;

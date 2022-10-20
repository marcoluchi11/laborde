import Header from "./Header";
import Search from "./Search";
import Cards from "./Cards/Cards";
import Contact from "./Contact/Contact";
import { useEffect } from "react";
import { useContext } from "react";
import { LabordeContext } from "../../context/LabordeContext";
const Home = () => {
  const { getBooks, booklist } = useContext(LabordeContext);
  useEffect(() => {
    if (booklist.length !== 0) return;
    getBooks();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Header />
      <Search />
      <Cards />
      <Contact />
    </div>
  );
};

export default Home;

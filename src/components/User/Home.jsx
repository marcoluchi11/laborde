import Header from "./Header";
import Search from "./Search";
import Cards from "./Cards";
import Contact from "./Contact";
import { useEffect } from "react";
import { useContext } from "react";
import { LabordeContext } from "../../context/LabordeContext";
const Home = () => {
  const { getBooks } = useContext(LabordeContext);
  useEffect(() => {
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

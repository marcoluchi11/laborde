import { createContext, useState } from "react";
import list from "./../bookdata.json";
export const LabordeContext = createContext();

const LabordeProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [books, setBooks] = useState(list);
  const [filterBooks, setFilterBooks] = useState([]);
  return (
    <LabordeContext.Provider
      value={{
        search,
        setSearch,
        cart,
        setCart,
        total,
        setTotal,
        books,
        setBooks,
        filterBooks,
        setFilterBooks,
      }}
    >
      {children}
    </LabordeContext.Provider>
  );
};

export default LabordeProvider;

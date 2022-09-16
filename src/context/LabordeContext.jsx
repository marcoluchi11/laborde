import { createContext, useState } from "react";
import list from "./../bookdata.json";
export const LabordeContext = createContext();

const LabordeProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [books, setBooks] = useState(list);
  const [user, setUser] = useState(false);
  const [filterBooks, setFilterBooks] = useState([]);
  const [error, setError] = useState({ state: false, message: "" });
  const [success, setSuccess] = useState({ state: false, message: "" });
  const [loading, setLoading] = useState(false);
  return (
    <LabordeContext.Provider
      value={{
        search,
        loading,
        setLoading,
        user,
        error,
        success,
        setSuccess,
        setError,
        setUser,
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

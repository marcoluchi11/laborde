import { collection, getDocs } from "firebase/firestore";
import { nanoid } from "nanoid";
import { createContext, useState } from "react";
import { db } from "../fbConfig";

export const LabordeContext = createContext();

const LabordeProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(false);
  const [filterBooks, setFilterBooks] = useState([]);
  const [error, setError] = useState({ state: false, message: "" });
  const [success, setSuccess] = useState({ state: false, message: "" });
  const [loading, setLoading] = useState(false);
  const [booklist, setBookList] = useState([]);
  const [cardDetail, setCardDetail] = useState(false);
  const getBooks = async () => {
    const booksRef = collection(db, "books");
    setLoading(true);
    const data = await getDocs(booksRef);
    setBookList(data.docs.map((doc) => ({ ...doc.data() })));
    setLoading(false);
  };
  const getLocal = () => {
    const local = JSON.parse(localStorage.getItem("cart"));
    if (local) {
      let totalLocal = 0;
      local.forEach((product) => {
        totalLocal += product.price;
      });
      setTotal(totalLocal);
      setCart(local);
    }
  };
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
    <LabordeContext.Provider
      value={{
        booklist,
        cardDetail,
        setCardDetail,
        setBookList,
        search,
        loading,
        getBooks,
        setLoading,
        user,
        error,
        success,
        handleCart,
        getLocal,
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

import { createContext, useState } from "react";
export const LabordeContext = createContext();

const LabordeProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <LabordeContext.Provider
      value={{ search, setSearch, cart, setCart, total, setTotal }}
    >
      {children}
    </LabordeContext.Provider>
  );
};

export default LabordeProvider;

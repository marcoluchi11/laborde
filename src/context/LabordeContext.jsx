import { createContext, useState } from "react";
export const LabordeContext = createContext();

const LabordeProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  return (
    <LabordeContext.Provider value={{ search, setSearch, cart, setCart }}>
      {children}
    </LabordeContext.Provider>
  );
};

export default LabordeProvider;

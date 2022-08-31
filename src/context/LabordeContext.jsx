import { createContext, useState } from "react";
export const LabordeContext = createContext();

const LabordeProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <LabordeContext.Provider value={{ search, setSearch }}>
      {children}
    </LabordeContext.Provider>
  );
};

export default LabordeProvider;

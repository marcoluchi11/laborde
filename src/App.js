import Footer from "./components/User/Footer";
import Navbar from "./components/User/Navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./components/User/Home";
import Who from "./components/User/Who";
import Cart from "./components/User/Cart";
const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who" element={<Who />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

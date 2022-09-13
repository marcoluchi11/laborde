import Footer from "./components/User/Footer/Footer";
import Navbar from "./components/User/Navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./components/User/Home";
import Who from "./components/User/Who";
import Cart from "./components/User/Cart/Cart";
import Pending from "./components/User/Pending";
import Failure from "./components/User/Failure";
const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who" element={<Who />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/failure" element={<Failure />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

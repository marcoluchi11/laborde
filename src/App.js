import Footer from "./components/User/Footer/Footer";
import Navbar from "./components/User/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/User/Home";
import Who from "./components/User/Who";
import Cart from "./components/User/Cart/Cart";
import Pending from "./components/User/Pending";
import Failure from "./components/User/Failure";
import HomeAdmin from "./components/Admin/HomeAdmin";
import AddBook from "./components/Admin/AddBook";
import DeleteBook from "./components/Admin/DeleteBook";
import UpdatePrice from "./components/Admin/UpdatePrice";
import EditBook from "./components/Admin/EditBook";
import { useContext } from "react";
import { LabordeContext } from "./context/LabordeContext";
import styled from "styled-components";
import CardDetail from "./components/User/Cards/CardDetail";
const Exito = styled.div`
  position: fixed;
  right: 25px;
  bottom: 50px;
  background-color: #4bb543;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;
const App = () => {
  const { success } = useContext(LabordeContext);
  return (
    <>
      {success.state && <Exito>{success.message}</Exito>}
      <main>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/update" element={<UpdatePrice />} />
          <Route path="/admin/add" element={<AddBook />} />
          <Route path="/admin/edit" element={<EditBook />} />
          <Route path="/admin/delete" element={<DeleteBook />} />
          <Route path="/" element={<Home />} />
          <Route path="/who" element={<Who />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/:id" element={<CardDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

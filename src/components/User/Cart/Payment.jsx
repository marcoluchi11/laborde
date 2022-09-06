import { useContext } from "react";
import styled from "styled-components";
import { LabordeContext } from "../../../context/LabordeContext";
const Pago = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`;
const BotonPago = styled.button`
  outline: 0;
  border: 0;

  width: 15rem;
  cursor: pointer;
  margin: 1rem;
  padding: 0.5rem;
  background-color: limegreen;
  color: #fff;
  border-radius: 5px;
  transition: 1s background-color ease;
  transition: 1s color ease;
  &&:hover {
    background-color: #fff;
    color: limegreen;
  }
`;
const Payment = () => {
  const { total } = useContext(LabordeContext);
  return (
    <Pago>
      <BotonPago formTarget="_blank" type="submit">
        Continuar con la compra
      </BotonPago>
      <div>
        <h3>Total: ${total}</h3>
      </div>
    </Pago>
  );
};

export default Payment;

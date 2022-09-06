import styled from "styled-components";
import ContactForm from "./ContactForm";
import Map from "./Map";

const Container = styled.section`
  @media (min-width: 720px) {
    display: flex;
  }
  background-color: #444444;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  margin: 1rem;
  padding: 1rem;
  border-radius: 15px;
`;

const Mapa = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #000;
`;
const Datos = styled.div`
  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    label:nth-child(1) {
      border-top: 0 !important;
      padding-top: 0 !important;
    }
  }
  div {
    text-align: center;
    label:nth-child(1) {
      border-top: 2px solid #fff;
      padding-top: 1rem;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact = () => {
  return (
    <Container>
      <Mapa>
        <Map />
      </Mapa>
      <Datos>
        <div>
          <h1>Dirección</h1>
          <p> 3 de Febrero 1065</p>
          <p>Rosario, Santa Fe, Argentina</p>
        </div>
        <div className="phone">
          <h1>Teléfono</h1>
          <p> +54 3416692059</p>
        </div>
        <div>
          <h1> E-mail</h1>
          <p className="fin"> laboga@yahoo.com.ar</p>
        </div>

        <div>
          <ContactForm />
        </div>
      </Datos>
    </Container>
  );
};

export default Contact;

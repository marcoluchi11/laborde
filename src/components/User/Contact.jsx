import styled from "styled-components";
import ContactForm from "./ContactForm";
import Map from "./Map";

const Container = styled.section`
  background-color: #444444;
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: #fff;
  margin: 1rem;
  padding: 1rem;
  border-radius: 15px;
  div {
    width: 50%;
  }
`;
const Contact = () => {
  return (
    <Container>
      <div>
        <h1>Dirección</h1>
        <p> 3 de Febrero 1065</p>
        <p>Rosario, Santa Fe, Argentina</p>
        <h1>Teléfono</h1>
        <p> +54 3416692059</p>
        <h1> Email</h1>
        <p> asdasd@yahoo.com</p>
        <Map />
      </div>
      <div>
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;

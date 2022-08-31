import styled from "styled-components";

const Container = styled.section`
  background-color: #444444;
  color: #fff;
  margin: 1rem;
  padding: 1rem;
  border-radius: 15px;
`;
const Contact = () => {
  return (
    <Container>
      <h1>Direccion</h1>
      <p> 3 de febrero 1065,Rosario</p>
      <h1>Telefono</h1>
      <p> +54 3416692059</p>
      <h1> Email</h1>
      <p> asdasd@yahoo.com</p>
    </Container>
  );
};

export default Contact;

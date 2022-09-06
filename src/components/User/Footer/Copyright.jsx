import styled from "styled-components";
const Container = styled.small`
  display: flex;
  justify-content: center;
`;
const Copyright = () => {
  return (
    <Container>
      <small>&copy; 2022. Todos los derechos reservados.</small>
    </Container>
  );
};

export default Copyright;

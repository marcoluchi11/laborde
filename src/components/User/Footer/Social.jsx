import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  img {
    margin: 1rem;
    cursor: pointer;
  }
`;

const Social = () => {
  return (
    <Container>
      <img
        src="https://icongr.am/fontawesome/instagram.svg?size=25&color=currentColor"
        alt="instagram"
      />
      <img
        src="https://icongr.am/fontawesome/facebook-f.svg?size=25&color=currentColor"
        alt="facebook"
      />
      <img
        src="https://icongr.am/fontawesome/whatsapp.svg?size=25&color=currentColor"
        alt="whatsapp"
      />
    </Container>
  );
};

export default Social;

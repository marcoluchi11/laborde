import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  margin: 1rem;
  border: 1px solid black;
  img {
    cursor: pointer;
  }
`;

const Cards = () => {
  return (
    <Container>
      <Card>
        <img
          src="https://picsum.photos/200
"
          alt="holis"
        />
        <h3>Libro nuevo</h3>
        <p>1300$</p>
      </Card>
      <Card>
        <img
          src="https://picsum.photos/200
"
          alt="holis"
        />
        <h3>Libro nuevo</h3>
        <p>1300$</p>
      </Card>
      <Card>
        <img
          src="https://picsum.photos/200
"
          alt="holis"
        />

        <h3>Libro nuevo</h3>
        <p>1300$</p>
      </Card>
      <Card>
        <img
          src="https://picsum.photos/200
"
          alt="holis"
        />
        <h3>Libro nuevo</h3>
        <p>1300$</p>
      </Card>
      <Card>
        <img
          src="https://picsum.photos/200
"
          alt="holis"
        />
        <h3>Libro nuevo</h3>
        <p>1300$</p>
      </Card>
    </Container>
  );
};

export default Cards;

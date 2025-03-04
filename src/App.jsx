import { Col, Container, Row } from "react-bootstrap";
import { Dish } from "./components/Dish";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <Header />
      <main className="pt-5 pb-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={3}>
              <Dish
                name="Tacos à l'unité"
                price={3}
                imgSrc="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
              />
            </Col>
            <Col md={3}>
              <Dish
                name="Enchiladas"
                price={12}
                imgSrc="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
              />
            </Col>
            <Col md={3}>
              <Dish
                name="Mole poblano"
                price={3}
                imgSrc="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

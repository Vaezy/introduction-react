import { Col, Container, Row } from "react-bootstrap";
import { Dish } from "./components/Dish";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={3}>
              <Dish
                name="Tacos à l'unité"
                description="Savourez l'authenticité mexicaine avec notre délicieux tacos à l'unité. Garni de viande grillée, de légumes frais et de sauce maison, chaque bouchée vous transporte directement au cœur du Mexique."
                price={3}
                imgSrc="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                stock={12}
              />
            </Col>
            <Col md={3}>
              <Dish
                name="Enchiladas"
                description="Nos enchiladas sont un festin de saveurs, avec des tortillas de maïs enroulées autour d'une garniture généreuse de viande, de fromage fondu et de sauce tomate épicée. Chaque bouchée est une explosion de goût qui vous fera revenir pour plus."
                price={12}
                imgSrc="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                stock={0}
              />
            </Col>
            <Col md={3}>
              <Dish
                name="Mole poblano"
                description="Découvrez la richesse de la cuisine mexicaine avec notre mole poblano. Cette sauce complexe et riche en saveurs est préparée avec une combinaison d'épices, de chocolat et de piments, offrant une expérience culinaire unique et exquise."
                price={3}
                imgSrc="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                stock={5}
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

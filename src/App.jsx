import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Dish } from "./components/Dish";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App = () => {
  const [cardCount, setCardCount] = useState(0);
  const [showNewOnly, setShowNewOnly] = useState(false);

  const handleShowNewOnly = () => {
    setShowNewOnly((prev) => !prev);
  };
  const addToCart = () => {
    setCardCount(cardCount + 1);
  };
  const dishes = [
    {
      id: 1,
      name: "Tacos à l'unité",
      price: 3,
      stock: 12,
      imgSrc:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      isNew: true,
    },
    {
      id: 2,
      name: "Enchiladas",
      price: 12,
      stock: 0,
      imgSrc:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      isNew: false,
    },
    {
      id: 3,
      name: "Mole poblano",
      price: 3,
      stock: 5,
      imgSrc:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      isNew: false,
    },
  ];

  const filteredDishes = dishes.filter(
    (dish) => dish.stock > 0 && (!showNewOnly || dish.isNew)
  );

  return (
    <>
      <Header cardCount={cardCount} />
      <main className="pt-5 pb-5">
        <Container>
          <Button
            variant="primary"
            className="mb-3"
            onClick={handleShowNewOnly}
          >
            {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquements"}
          </Button>
          <Row>
            {filteredDishes.map((dish) => (
              <Col key={dish.id} md={4}>
                <Dish
                  name={dish.name}
                  price={dish.price}
                  imgSrc={dish.imgSrc}
                  isNew={dish.isNew}
                  addToCart={addToCart}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

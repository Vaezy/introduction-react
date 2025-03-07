import { useContext, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Dish } from "./components/Dish";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CartContext } from "./context/CartContext";

export const App = () => {
  const { cartCount } = useContext(CartContext);
  const prevCartCountRef = useRef(cartCount);
  const [showNewOnly, setShowNewOnly] = useState(false);

  useEffect(() => {
    prevCartCountRef.current = cartCount;
  }, [cartCount]);

  const handleShowNewOnly = () => {
    setShowNewOnly((prev) => !prev);
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
      <Header />
      <main className="pt-5 pb-5">
        <Container>
          <Button
            variant="primary"
            className="mb-3"
            onClick={handleShowNewOnly}
          >
            {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquements"}
          </Button>
          <p>
            Le panier est passé de {prevCartCountRef.current} à {cartCount}{" "}
            articles.
          </p>
          <Row>
            {filteredDishes.map((dish) => (
              <Col key={dish.id} md={4}>
                <Dish
                  name={dish.name}
                  price={dish.price}
                  imgSrc={dish.imgSrc}
                  isNew={dish.isNew}
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

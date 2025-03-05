import { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/styles/dish.scss";
import { CartContext } from "../context/CartContext";

export const Dish = ({ name, price, imgSrc, isNew }) => {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: "increment" });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <Card>
      <Card.Img src={imgSrc} />
      <Card.Body>
        {isNew === true && (
          <Badge bg="primary" className="position-absolute top-0 end-0 m-2">
            Nouveau
          </Badge>
        )}
        <Card.Title>{name}</Card.Title>
        <Card.Text>Prix : {price}€</Card.Text>
        <div className="d-flex gap-4">
          <Button variant="success" className="w-100" onClick={handleAddToCart}>
            Ajouter au panier
          </Button>
          <Button
            variant="danger"
            className="w-100"
            onClick={handleRemoveFromCart}
          >
            Retirer du panier
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

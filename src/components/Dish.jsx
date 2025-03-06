import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/styles/dish.scss";
import { useCart } from "../hooks/useCart";

export const Dish = ({ name, price, imgSrc, isNew }) => {
  const { addToCart, removeFromCart } = useCart();

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
          <Button variant="success" className="w-100" onClick={addToCart}>
            Ajouter au panier
          </Button>
          <Button variant="danger" className="w-100" onClick={removeFromCart}>
            Retirer du panier
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/styles/dish.scss";

export const Dish = ({ name, price, imgSrc, isNew }) => {
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
        <Button variant="primary" className="w-100">
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
};

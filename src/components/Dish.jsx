import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import "../assets/styles/dish.scss";

export const Dish = ({ name, price, imgSrc, isNew }) => {
  return (
    <Card>
      <Card.Img src={imgSrc} />
      <Card.Body>
        {isNew ? (
          <Badge bg="primary position-absolute top-0 end-0 m-2">Nouveau</Badge>
        ) : (
          ""
        )}
        <Card.Title>{name}</Card.Title>
        <Card.Text>Prix : {price}€</Card.Text>
      </Card.Body>
    </Card>
  );
};

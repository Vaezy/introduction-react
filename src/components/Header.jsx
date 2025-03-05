import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.webp";
import "../assets/styles/header.scss";
import { CartContext } from "../context/CartContext";

export const Header = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <header>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img alt="Logo App" src={logo} />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Accueil</Nav.Link>
              <Navbar.Text>Panier ({cartCount})</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

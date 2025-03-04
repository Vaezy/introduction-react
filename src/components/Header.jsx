import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <header>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo App"
              src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
              width="50"
              height="50"
            />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Accueil</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

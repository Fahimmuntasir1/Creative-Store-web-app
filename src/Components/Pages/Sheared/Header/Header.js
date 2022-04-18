import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} className="fs-3 fw-bold" to="/">
            Creative Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#services">Services</Nav.Link>
              <Nav.Link as={Link} to="/checkout">
                Checkout
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about" className="text-white">
                About
              </Nav.Link>
              {user ? (
                <button
                  className="btn btn-link text-white  text-decoration-none"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="login" className="text-white">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

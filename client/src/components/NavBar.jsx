import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import '/src/components/NavBar.css'
import Logo from "../assets/BlueTechtonicaWord.png";


const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();


    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
                {/*
                    Use `<Link />` component instead of `<Nav.Link>` or something because we want the linking to be
                    handled by react-router and not the browser.
                */}
             <Navbar.Brand href="/">
            <img
              src={Logo}
              height="30"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>                
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Link className="nav-link" to='/'style={{ color: '#05556d', fontWeight: 'bold' }} >Home</Link>
                      <a className="nav-link" href="https://github.com/Techtonica/curriculum/blob/main/onboarding/asking-good-questions.md"style={{ color: '#05556d', fontWeight: 'bold' }} >How to ask a question?</a>
                      <Link className="nav-link" to='/about' style={{ color: '#05556d', fontWeight: 'bold' }} >Meet Contributors </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

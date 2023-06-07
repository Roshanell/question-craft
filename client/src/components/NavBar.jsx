import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
                {/*
                    Use `<Link />` component instead of `<Nav.Link>` or something because we want the linking to be
                    handled by react-router and not the browser.
                */}
                <Link className="navbar-brand" to="/">Question-Craft</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Link className="nav-link" to='/'>Home</Link>
                      <a className="nav-link" href="https://github.com/Techtonica/curriculum/blob/main/onboarding/asking-good-questions.md">How to ask a question?</a>
                      <Link className="nav-link" to='/about'>Meet Contributors </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

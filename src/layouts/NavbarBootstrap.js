import { Fragment } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';


function NavbarBootstrap() {
    return (
      
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link  as={Link}  to="/about">Sobre</Nav.Link>
                        <Nav.Link  as={Link}  to="/contact">Contato</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <section>
                    <Outlet></Outlet>  
            </section>
        </>
  );
}

export default NavbarBootstrap;
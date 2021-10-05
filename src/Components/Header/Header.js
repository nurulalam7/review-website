import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                   
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="link" to="/home">Home</NavLink>
                            <NavLink className="link" to="/about">About-Us</NavLink>
                            <NavLink className="link" to="/service">Services</NavLink>
                            <NavLink className="link" to="/review">review</NavLink>
                            <NavLink className="link" to="/contact">Contact</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className=" text-center">
                <div className="container col-12">
                    <div className="intro-text">
                        <h1> <i class="fas fa-user-graduate"></i> <span>speaker council limited</span> </h1>
                    </div>
                </div>
            </div>
        </div>
      

       
               
        
    )
}

export default Header;

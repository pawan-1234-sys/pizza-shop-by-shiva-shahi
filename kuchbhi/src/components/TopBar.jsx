import React from "react";
import { Navbar, Nav, Container,Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";
const TopBar = () => {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark" expand="lg"> */}
      <Navbar className="jan" >

        <Container fluid>


          {/* <h5 className="rohan">
            &nbsp;&nbsp;
           The Ultimate Pizzas
          </h5> */}
  <Image
              src="images/logo.png"
              alt="SHAHI"
              style={{ height: "50px" }}
            />

          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName="">
              <Nav.Link className="don">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="">
              <Nav.Link className="don">About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="">
              <Nav.Link className="don">Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName="">
              <Nav.Link className="don">Terms And Policy</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;


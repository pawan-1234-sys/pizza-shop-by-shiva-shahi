import React from "react";
import { Navbar, Nav, Container, Image,NavDropdown} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logoutUser } from "../actions/userAction";


import {BsCartCheckFill} from "react-icons/bs";

const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="none" variant="light"  >
        {/* <Container> */}
          <Navbar.Brand>
            <Image
              src="images/logo.png"
              alt="SHAHI"
              style={{ height: "60px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">


<LinkContainer to="/">
                    <Nav.Link  className="don">Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link  className="don">About Us</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link className="don">Contact Us</Nav.Link>
                  </LinkContainer>


            {currentUser ? (

                <LinkContainer to="/">
              <NavDropdown title={currentUser.name}  id="basic-nav-dropdown">

              
              <LinkContainer to="/orders">

                    <NavDropdown.Item >
                       Order
                     </NavDropdown.Item>

               </LinkContainer>
             

               <LinkContainer to="/admin">

                    <NavDropdown.Item >
                            Admin
                    </NavDropdown.Item>

               </LinkContainer> 



 


                  <NavDropdown.Item  
                       onClick={() => {
                                dispatch(logoutUser());
                               }}
                               >
                         Logout
                   </NavDropdown.Item>
            </NavDropdown>
                    </LinkContainer>      
              ) : (
                <>
                  {" "}
{/* 
                  <LinkContainer to="/">
                    <Nav.Link  className="don">Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link  className="don">About Us</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link className="don">Contact Us</Nav.Link>
                  </LinkContainer>
                 */}



                  <LinkContainer to="/login">
                    <Nav.Link className="don">Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link className="don">Register</Nav.Link>
                  </LinkContainer>{" "}
                </>
              )}



              <LinkContainer to="/cart">
                <Nav.Link className="don"><BsCartCheckFill/>{cartState.cartItems.length} </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  );
};

export default NavBar;
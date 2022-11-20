import React from 'react'
// import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon} from 'cdbreact';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer,CDBBox } from 'cdbreact';

import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import {AiFillHome} from "react-icons/ai";
const Footer = () => {
  return (
    <CDBFooter className="shadow"  >
    <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%'}}>
      <CDBBox display="flex" justifyContent="between" className="flex-wrap">
        <CDBBox>
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img alt="SHAHI" src="images/logo.png" width="300px" />
            {/* <span className="ml-3 h5 font-weight-bold"></span> */}
          </a>
          <p className="my-0" style={{ width: '250px' }}>
          Pizza Hut is an American multinational restaurant 
          chain and international franchise founded in 1958
           in Wichita.
            {/* Kansas by Dan and Frank Carney.  */}
           {/* They serve their signature pan pizza and other dishes including pasta
           , breadsticks and dessert at dine-in, take-out and delivery chain locations. */}
          </p>
        </CDBBox>
        <CDBBox>
          <p className="h5 mb-3" style={{ fontWeight: '600'}}>
          ABOUT
          </p>
          <CDBBox flex="column" display="flex"  style={{ cursor: 'pointer', padding: '0' }}>
            <CDBFooterLink href="/" >Home</CDBFooterLink>
            <CDBFooterLink href="/about">About Us</CDBFooterLink>
            <CDBFooterLink href="/contact">Contact</CDBFooterLink>
            <CDBFooterLink href="/policy">Term & Policy</CDBFooterLink>
          </CDBBox>
        </CDBBox>
        <CDBBox>
          <p className="h5 mb-3" style={{ fontWeight: '600' }}>
            Help
          </p>
          <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            {/* <CDBFooterLink href="/">Support</CDBFooterLink> */}
            <CDBFooterLink  href="/register">Sign Up</CDBFooterLink>
            <CDBFooterLink href="/login">Sign In</CDBFooterLink>
          </CDBBox>
        </CDBBox>
        <CDBBox>
          <p className="h5 mb-3" style={{ fontWeight: '600' }}>
            Contact
          </p>
          <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>

{/*      
            <CDBFooterLink href="/">Windframe</CDBFooterLink>
            <CDBFooterLink href="/">Loop</CDBFooterLink>
            <CDBFooterLink href="/">Contrast</CDBFooterLink> */}
              <tbody>
              <tr>
                  <td>
                    <AiFillHome />
                  </td>
                  <td>Shop No 4, Block A 3
                     Sector 110
                     Noida - 201304
                     </td>
                </tr>

                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>1800-208-1234</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>9648160641</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>shivashahi226@gmail.com</td>
                </tr>
              </tbody>
          </CDBBox>
        </CDBBox>
      </CDBBox>
      <CDBBox
        display="flex"
        justifyContent="center"
        style={{ width: '100%' }}
        className="mx-auto mt-1"
      >
        <CDBBtn flat color="dark" className="mx-2 p-2" href="https://www.facebook.com/pizzahutindia/"    >
          <CDBIcon fab icon="facebook-f" />
        </CDBBtn>
        <CDBBtn flat color="dark" className="mx-2 p-2" href="https://twitter.com/pizzahutin?lang=en">
          <CDBIcon fab icon="twitter" />
        </CDBBtn>
        <CDBBtn flat color="dark" className="mx-2 p-2" href="https://www.instagram.com/pizzahut/?hl=en">
          <CDBIcon fab icon="instagram" />
        </CDBBtn>
        <CDBBtn flat color="dark" className="mx-2 p-2" href="https://www.youtube.com/user/PizzaHutIN?app=desktop">
          <CDBIcon fab icon="youtube" />
        </CDBBtn>
      </CDBBox>
      <small className="text-center mt-1">&copy;All Rights Reserved. Copyright © Jubilant FoodWorks Ltd.</small>
    </CDBBox>
  </CDBFooter>
  )
}

export default Footer;

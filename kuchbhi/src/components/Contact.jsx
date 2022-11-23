import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1 >The Ultimate Pizzas</h1>


            <p className="siya">
              Established in the year 2019, Pizza Heritage in Delta 1, Delhi is a top player in the category Pizza Outlets in the Delhi.
               This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Delhi. 
                The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.
                  In Delhi, this establishment occupies a prominent location in Delta 1. 
                  {/* It is known to provide top service in the following categories: Pizza Outlets, Restaurants With Offers, Pizza Home Delivery Services, Burger Home Delivery. */}

            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    Contact Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>1800-208-1234</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>9648160641</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>shivashahi226@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="https://i.pinimg.com/564x/1a/3e/82/1a3e8276fed9ff6ef5bfa55a276ef749.jpg"
              style={{ width: "100%", height: "80%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
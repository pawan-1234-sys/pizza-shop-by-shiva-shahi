import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

import { useDispatch ,useSelector} from "react-redux";
import { useState } from "react";


const About = () => {


  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);
  
  const dispatch = useDispatch();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1 className="jiya">ABOUT PIZZA HUT</h1>
        <p className="siya">
          It was the summer of 1958 when Dan and Frank Carney decided to open a pizzeria.
          With mouth-watering pizzas prepared by the founders themselves, Pizza Hut soon became the most popular neighbourhood restaurant.
          From then to over 13,200 restaurants across the world today, we have come a long way.

          Today, Pizza Hut is about much more than pizzas.
          From freshly sauteed pastas & delicious appetizers to mocktails, desserts, soups and salads, we have a wide range for you to feast on.
          {/* All this, combined with the warm, inviting ambience and friendly service, will lead to endless conversations, laughter and memories that you'll cherish forever.
          So, let your hair down and feel at ease. Go ahead and enjoy the All New Pizza Hut experience! */}
          The address of this restaurant is Shop No 4, Block A 3, Sector 110, Noida, Uttar Pradesh - 201304.
        </p>
       
        <h1 className="jiya">SPECIALITY</h1>
        <Row>
          <Col md={6}>
            <p className="siya">
              Pizza is one of the most relished Italian foods all over the world.
              Even in our country, many of us enjoy a pizza that has a good filling and cheese on top.
              Pizza Outlets in Delhi are experts in making delicious pizza.
              They ensure that the best quality produce is used to prepare the same.

              If you are a pizza lover, we strongly suggest you check out Pizza Heritage in Delta 1, Delhi.
              They are famous for making some lip-smacking pizza and offering a variety of options to their customers.
            </p>
          </Col>
          <Col md={6}>
            <p className="siya">
              Pizza Heritage in Delta 1 has a wide range of products and / or services to cater to the varied requirements of their customers.
              {/* The staff at this establishment are courteous and prompt at providing any assistance. */}
              They readily answer any queries or questions that you may have.
              Pay for the product or service with ease by using any of the available modes of payment, such as Amazon Pay, BHIM, Cash, G Pay, Paytm, PhonePe, UPI, Card on Delivery, Cash on Delivery.
              This establishment is functional from 11:00 - 4:00.
            </p>
          </Col>
        </Row>
        <Row>
          <h1 className="pihu">FOUNDER</h1>
          <Col md={3}> 
          <Card style={{ width: "18rem", marginTop: "2px" }}>
        <Card.Img
          variant="top"
          src="https://i.insider.com/5f63c33a323fc4001e0d6fc0?width=700"
          style={{ height: "250px",cursor: "pointer"}}
          onClick={handleShow}
        />
          {/* <Card.Body> */}
        <Card.Title>Kevin Systrom</Card.Title>
        {/* </Card.Body> */}
    </Card>
          </Col>
          <Col md={9}>
            <p className="siya">
            Pizza Hut was founded in 1958 by brothers Dan and Frank Carney in their hometown of Wichita, Kansas.
             When a friend suggested opening a pizza parlor--then a rarity--they agreed that the idea could prove successful, and they borrowed $600 from their mother to start a business with partner John Bender.
              Renting a small building at 503 South Bluff in downtown Wichita and purchasing secondhand equipment to make pizzas, the Carneys and Bender opened the first Pizza Hut restaurant; on opening night, they gave pizza away to encourage community interest.
               A year later, in 1959, Pizza Hut was incorporated in Kansas, and Dick Hassur opened the first franchise unit in Topeka, Kansas.
               In the early 1960s Pizza Hut grew on the strength of aggressive marketing of the pizza restaurant idea. 
               In 1962, the Carney brothers bought out the interest held by Bender, and Robert Chisholm joined the company as treasurer.
                In 1966, when the number of Pizza Hut franchise units had grown to 145, a home office was established to coordinate the businesses from Wichita.

            </p>
          </Col>
     
          
        </Row>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kevin Systrom</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src="https://i.insider.com/5f63c33a323fc4001e0d6fc0?width=700"
              style={{  width: "100%", height: "400%" }}
            />
          </div>
         
        </Modal.Body>
      </Modal>

  

      </Container>

    </>
  );
};

export default About;
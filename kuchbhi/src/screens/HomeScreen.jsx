import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filters from "../components/Filters";

import { Carousel } from 'react-bootstrap'

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>


      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/1093/950-446-02-26-07-22-06-58-08.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/1093/14-10-2021-14-10-21-12-36-07.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    {loading ? (
    <Loader  />
    ): error ? (
      <Error>Error while fetching pizzas {error}</Error>
    ) : (
      <Row>
         <Filters />   
      {pizzas.map((pizza) => (
        <Col md={3} key={pizza.name}>
          <Pizza pizza={pizza} />
        </Col>
      ))}
    </Row>
   ) }

      
      </Container>
    </>
  );
};

export default HomeScreen;
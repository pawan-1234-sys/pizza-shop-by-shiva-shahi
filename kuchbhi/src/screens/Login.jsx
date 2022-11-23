import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";

import { Row, Col, Image } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };




  return (
    <>
    {/* s */}
<Container style={{ marginTop: "5px" }}>
<h1 align="center">Login </h1>

        <Row>


          <Col md={6}>

{/* e */}
      {/* <Container> */}
        <Form style={{ width: '100%',align:'center',marginTop: "60px"}}>
        {/* <h1 align="center">Login </h1> */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary"        
          onClick={loginHandler}>
            Login
          </Button>
        </Form>
        {/* s */}
</Col>
          <Col md={6}>
            <Image
              src="https://pbs.twimg.com/card_img/1591181954497380352/8ZfdH8eg?format=png&name=small"
              style={{ width: "100%", height: "90%", marginTop: "30px" }}
            />
          </Col>
          </Row>
{/* e */}
      </Container>
    </>
  );
};

export default Login;

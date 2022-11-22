import React,{ useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";

import { Row, Col, Image } from "react-bootstrap";

const Registe = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confrimPassword, setConfirmPassword] = useState("");

    const registerState = useSelector((state) => state.registerUserReducer);
    const { error, success, loading } = registerState;
  
  
    const dispatch = useDispatch();

    const registerhandler = () => {
        if (password !== confrimPassword) {
          alert("Password do not match");
        } else {
          const user = { name, email, password, confrimPassword };
          dispatch(registerUser(user));
        }
      };
  return (
  <>
{/* s */}
<Container style={{ marginTop: "5px" }}>
 <h1 align="center">Registration </h1>

        <Row>
          <Col md={6}>
{/* e */}
 {/* <Container> */}
 {loading && <Loader />}
        {success && <Success success="User Register Successfully" />}
        {error && <Error error="somthing went wrong" />}
 <Form style={{ width: '100%',align:'center', marginTop: "20px" }}>
 {/* <h1 align="center">Registration </h1> */}

 <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
            type="password"
            placeholder="Confirm Password"
            value={confrimPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
             />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={registerhandler}>
          Register
          </Button>
        </Form>

{/* s */}
</Col>
          <Col md={6}>
            <Image
              src="https://eply.com/wp-content/uploads/2021/12/ePly-1.jpg"
              style={{ width: "110%", height: "90%", marginTop: "30px" }}
            />
          </Col>
          </Row>
{/* e */}
        
      </Container>
  </>
  );
};

export default Registe;

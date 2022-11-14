import React, { useEffect } from "react";
import { Link,Routes,Route } from "react-router-dom";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";




const AdminScreen = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <>
    {/* start */} 
     <Container>
     <Row>
          <h1 className="love">Admin Panel</h1>

          <Col md={3}>
     <ButtonGroup vertical style={{ minHeight: "50px" }}>
             <Button className="button" >
              <Link to="/admin/userlist" className="tum" ><h4 className="hero">user pannel</h4></Link>
              </Button> 
              <Button className="button" >
              <Link to="/admin/pizzalist" className="tum" ><h4 className="hero">pizza pannel</h4></Link>
              </Button>
             
              <Button className="button" >
              <Link to="/admin/addnewpizza" className="tum" ><h4 className="hero">addnw pizza pannel</h4></Link>
              </Button>
              <Button className="button" >
              <Link to="/admin/orderlist" className="tum" ><h4 className="hero">order pannel</h4></Link>
              </Button>

           

            
            </ButtonGroup>

            </Col>


            {/* <Col md={10}>
            <Routes>
            <Route path="/admin/userlist" element={< Userlist/>} ></Route>
            <Route path="/admin/pizzalist" element={< Pizzaslist/>} ></Route>


            </Routes>
          </Col> */}






            </Row>

     </Container>
     {/* end */}

    </>
  );
};

export default AdminScreen;
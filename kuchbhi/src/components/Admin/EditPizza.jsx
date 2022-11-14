import React, {  useState,useEffect } from "react";
import { Form, Row, Col, Button,Container } from "react-bootstrap";
import { useDispatch,useSelector } from 'react-redux';
import { getPizzaById,updatePizza } from "../../actions/pizzaAction";
import Loader from "./../Loader";
import Error from "./../Error";
// import Success from "./../Success";
import { useParams } from "react-router-dom";
    const EditPizza = () => {
      const [name, setname] = useState("");
      const [smallPrice, setsmallPrice] = useState();
      const [largprice, setlargprice] = useState();
      const [mediumPrice, setmediumPrice] = useState();
      const [image, setimage] = useState("");
      const [description, setdescription] = useState("");
      const [category, setcategory] = useState("");
      
      const params=useParams();
  
      const dispatch = useDispatch();
  const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
  const { loading,error, pizza } = getPizzaByState;
  const updatePizzaState = useSelector((state) => state.updatePizzaByIdReducer);
  const { updateloading,updatesuccess,updateerror } = updatePizzaState;
useEffect(() => {

  if(pizza){
  if(pizza._id === params.pizzaId){
setname(pizza.name)
setdescription(pizza.description);
setcategory(pizza.category);
setimage(pizza.image);
setsmallPrice(pizza.prices[0]["small"]);
setmediumPrice(pizza.prices[0]["medium"]);
setlargprice(pizza.prices[0]["large"]);
  }else{
    dispatch(getPizzaById(params.pizzaId));
  }
}else {
    dispatch(getPizzaById(params.pizzaId));
  }

}, [pizza, dispatch,params.pizzaId]);
const submitForm = (e) => {
  e.preventDefault();
  const updatedPizza = {
    _id: params.pizzaId,
    name,
    image,
    description,
    category,
    prices: {
      small: smallPrice,
      medium: mediumPrice,
      larg: largprice,
    },
  };
  dispatch(updatePizza(updatedPizza));

};
  return (
   
    <div>
    {updateloading && <Loader />}
{error && <Error error="add new pizza error" />}
{/* {success && <Success success="Pizza Added Successfully" />} */}
<Container>
<Form onSubmit={submitForm} className="bg-light p-4">
<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      value={name}
      onChange={(e) => setname(e.target.value)}
      placeholder="enter name"
    />
  </Form.Group>
  <Row className="mb-3 mt-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Small Price</Form.Label>
      <Form.Control
        type="text"
        value={smallPrice}
        onChange={(e) => setsmallPrice(e.target.value)}
        placeholder="Enter Small Price"
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Medium Price</Form.Label>
      <Form.Control
        type="text"
        value={mediumPrice}
        onChange={(e) => setmediumPrice(e.target.value)}
        placeholder="Enter medium price"
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Larg Price</Form.Label>
      <Form.Control
        type="text"
        value={largprice}
        onChange={(e) => setlargprice(e.target.value)}
        placeholder="Enter larg price"
      />
    </Form.Group>
  </Row>
  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Image</Form.Label>
    <Form.Control
      ttype="text"
      value={image}
      onChange={(e) => setimage(e.target.value)}
      placeholder="Add Image URL"
    />
  </Form.Group>
</Row>

<Form.Group className="mb-3" controlId="formGridAddress1">
  <Form.Label>Description</Form.Label>
  <Form.Control
    type="text"
    value={description}
    onChange={(e) => setdescription(e.target.value)}
    placeholder="Enter Description"
  />
</Form.Group>

<Form.Group className="mb-3" controlId="formGridAddress2">
  <Form.Label>Category</Form.Label>
  <Form.Control
    type="text"
    value={category}
    onChange={(e) => setcategory(e.target.value)}
    placeholder="Enter Category"
  />
</Form.Group>

<Button variant="primary" type="submit">
  Update Pizza
</Button>
</Form>
</Container>
</div>
  )
}

export default EditPizza

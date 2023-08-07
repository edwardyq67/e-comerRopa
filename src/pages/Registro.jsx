import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { postRegistroThunk } from "../store/slices/registro.slice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Registro = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const {register,handleSubmit}=useForm()
const submit=(informacion)=>{
    dispatch(postRegistroThunk(informacion))
    console.log(informacion)
}
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>NAME</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="edward"
              aria-describedby="inputGroupPrepend"
              required
              {...register("name")}
            />
            
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>E-MAIL</Form.Label>
          <InputGroup hasValidation>
                <Form.Control
              type="text"
              placeholder="edward@gmail.com"
              aria-describedby="inputGroupPrepend"
              required
              {...register("gmail")}
            />
           
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>PASSWORD</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="edward1234"
              aria-describedby="inputGroupPrepend"
              required
              {...register("password")}
            />
            
          </InputGroup>
        </Form.Group>
      </Row>

      <Button onClick={()=>navigate('/login')}type="submit">REGISTRATE</Button>
    </Form>
  );
};

export default Registro;

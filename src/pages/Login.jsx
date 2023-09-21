import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './css/login.css'
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    axios
      .post("https://api-ropa1-uwg9-dev.fl0.io/usuario/login", data)
      .then((res) => {
        if (res.data.token) {
          
          localStorage.setItem("token", res.data.token);
          navigate("/");
        } else {
          
          alert("El usuario no existe.");
        }
      })
      .catch((error) => {
        
        console.error("Error al iniciar sesión:", error);
      });
  };
  
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Row className="mb-4">
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>USUARIO</Form.Label>
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
          <Form.Label>CONTRASEÑA</Form.Label>
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

      <Button  style={{marginBottom:'15px'}}type="submit">Submit form</Button>
      <h4>crea tu propio usuario: <a className="a" onClick={()=>navigate('/registrate')}>registro</a></h4>
    </Form>
  );
};

export default Login;

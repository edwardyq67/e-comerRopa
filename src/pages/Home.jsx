import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  colorThunk,
  filterRopaGenero,
  filterRopaVersatil,
  getProducthunk,
} from "../store/slices/home.slice";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Form, InputGroup, Row } from "react-bootstrap";
import "./css/home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ropaSelectro = useSelector((state) => state.homeSlice);
  const [categoriaName, setCategoriaName] = useState([]);
  const [categoriaGenero, setCategoriaGenero] = useState([]);
  const [color, setColor] = useState("");
  
  useEffect(() => {
    dispatch(getProducthunk());
    axios
      .get("https://ropas-db.onrender.com/ropa/versatil")
      .then((res) => setCategoriaName(res.data));
    axios
      .get("https://ropas-db.onrender.com/ropa/genero")
      .then((res) => setCategoriaGenero(res.data));
  }, []);

  return (
    <Row xs={2} md={4} className="g-5">
      <form style={{ width: "100vw" }} onSubmit={()=>dispatch(colorThunk(color))}>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="color"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Button
          type="button"
          onClick={()=>dispatch(colorThunk(color))}
          className="btn btn-success"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </InputGroup>
      </form>
      

      <Dropdown style={{ width: "45vw", margin: "auto" }}>
        <Dropdown.Toggle
          style={{ width: "35vw", margin: "auto" }}
          variant="success"
          id="dropdown-basic"
        >
          VERSATIL
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {categoriaName.map((versatil) => (
            <Dropdown.Item
              key={versatil.id}
              onClick={() => dispatch(filterRopaVersatil(versatil.id))}
            >
              {versatil.versatilidad}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown style={{ width: "45vw", margin: "auto" }}>
        <Dropdown.Toggle
          style={{ width: "35vw", margin: "auto" }}
          variant="success"
          id="dropdown-basic"
        >
          GENERO
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {categoriaGenero.map((genero) => (
            <Dropdown.Item
              key={genero.id}
              onClick={() => dispatch(filterRopaGenero(genero.id))}
            >
              {genero.gener.toUpperCase()}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {ropaSelectro.map((ropa) => (
        <Card
          key={ropa.id}
          className="selectRopa"
          style={{ width: "22rem" }}
          onClick={() => navigate(`/ropas/${ropa.id}`)}
        >
          <Card.Img className="imgRopa" variant="top" src={ropa.imgRopa.url} />
          <Card.Body>
            <Card.Title className="title">{ropa.name.toUpperCase()}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <b>VERSATIL: </b>
              {ropa.versatil.versatilidad}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>GENERO: </b>
              {ropa.genero.gener.toUpperCase()}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </Row>
  );
};

export default Home;

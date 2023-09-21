import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./css/Details.css";
import Row from "react-bootstrap/Row";
import { filterRopaVersatil } from "../store/slices/home.slice";
import { Button, Col } from "react-bootstrap";
import { thunkPostCarrito } from "../store/slices/carrito.slice";
const RopaDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ropaVersatil = useSelector((state) => state.homeSlice);
  const[contador,setContador]=useState(Number)
  useEffect(() => {
    axios.get(`https://api-ropa1-uwg9-dev.fl0.io/ropas/${id}`).then((res) => {
      setDetails(res.data);
      dispatch(filterRopaVersatil(res.data.versatil.id));
    });
  }, [id]);
const postCompra=(id)=>{
  const corrito={
    cantidad:contador,
    
    ropaId:details.id
  }
    dispatch(thunkPostCarrito(corrito))
}
  return (
    <Row>
      <Col  md={9}>
        <div style={{ width: "100%" }}>
          <Card
            style={{maxWidth:'600px'}}
          >
            <Card.Img
              style={{ height: "35rem", width: "auto" }}
              variant="top"
              src={details.imgRopa?.url}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {details.name}
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <b>MARCA: </b>
                  {details.marca}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>PRICE: </b>
                  {details.precio}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>COLOR: </b>
                  {details.color}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <div className="inputNumber">
            
               <input  id="custom-number-input" type="number" value={contador} onChange={e=>setContador(e.target.value)}/>
               
            </div>
             <Button
              onClick={postCompra}
              type="button"
              style={{ width: "40%", margin: "auto", marginBottom: "10px" }}
              className="btn btn-success"
            >
              agregar
            </Button>
          </Card>
        </div>
      </Col>
      <Col xs={6} md={3} >
      <div style={{width:'100%'}}>
        <ListGroup >
          {ropaVersatil.map((sugerencia) => (
            <ListGroup.Item
            
              key={sugerencia.id}
              onClick={() => navigate(`/ropas/${sugerencia.id}`)}
            >
              <img className="sugerenciaImg" src={sugerencia.imgRopa.url} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
        
      
      </Col>
      
        
      
    </Row>
  );
};

export default RopaDetail;

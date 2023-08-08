import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarrito } from "../store/slices/carrito.slice";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {  Link } from "react-router-dom";
import  Col  from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import { CompraPostThunk } from "../store/slices/compra.slice";
const Carrito = () => {
  const carrito = useSelector((state) => state.carritoSlice);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarrito());
  }, []);
  const {register,handleSubmit}=useForm()
const registros=(gmail)=>{
  dispatch(CompraPostThunk(gmail))
  console.log(gmail)
}
  return (
    <Row>
      <Col >
        <ListGroup style={{width:'100%'}} >
          {carrito.map((carrit) => (
            <div key={carrit.id}>
              <Link to={`/ropas/${carrit.ropa.id}`}>
                <img className="sugerenciaImg" src={carrit.ropa.imgRopa.url} />
              </Link>
              <div>
                <ListGroup.Item style={{ textAlign: "center" }}>
                  {carrit.ropa.name.toUpperCase()}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>COLOR: </b>
                  {carrit.ropa.color}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>MARCA: </b>
                  {carrit.ropa.marca}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>PRECIO: </b>
                  {carrit.ropa.precio}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>CANTIDAD: </b>
                  {carrit.cantidad}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>TOTAL: </b>
                  {carrit.cantidad*carrit.ropa.precio}
                </ListGroup.Item>
              </div>
            </div>
          ))}
        </ListGroup>
        
       
      </Col>
    </Row>
  );
};

export default Carrito;

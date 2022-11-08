import React from "react";
import "./card.css"


export default function Card(props) {

  return (
    <div className="card--container">
    <p className="card--modelo">{props.modelo}</p>
    <p className="card--marca">{props.marca}</p>
    <p className="card--cor">{props.cor}</p>
    <p className="card--ano_fab">{props.ano_fab}</p>
    <p className="card--ano_mod">{props.ano_mod}</p>
    <p className="card--tipo_camb">{props.tipo_camb}</p>
  </div>
  )
}
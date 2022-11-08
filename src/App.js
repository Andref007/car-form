import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'
import Card from './components/cards/card'

function App() {
  const [values, setValues] = useState()

  const [listCars, setListCars] = useState()
//  console.log(listCars)
  const handleChangeValues = value => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      marca: values.marca,
      modelo: values.modelo,
      cor: values.cor,
      ano_fab: values.ano_fab,
      ano_mod: values.ano_mod,
      tipo_camb: values.tipo_camb
    }).then(response => {
      console.log(response)
    })
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListCars(response.data)
    })
  }, [])

  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Web-Cars</h1>
        <label>Marca:</label>
        <input
          type="text"
          name="marca"
          placeholder="Digite a marca do veículo"
          className="register--input"
          onChange={handleChangeValues}
        />
        <label>Modelo:</label>
        <input
          type="text"
          name="modelo"
          placeholder="Digite o modelo do veículo"
          className="register--input"
          onChange={handleChangeValues}
        />
        <label>Cor:</label>
        <input
          type="text"
          name="cor"
          placeholder="Qual a cor do veículo?"
          className="register--input"
          onChange={handleChangeValues}
        />
        <label>Ano do fabricação:</label>
        <input
          type="text"
          name="ano_fab"
          placeholder="Ano de Fabricação"
          className="register--input"
          onChange={handleChangeValues}
        />
        <label>Ano do modelo:</label>
        <input
          type="text"
          name="ano_mod"
          placeholder="Ano do Modelo"
          className="register--input"
          onChange={handleChangeValues}
        />
        <label>Tipo de câmbio:</label>
        <input
          type="text"
          name="tipo_camb"
          placeholder="Tipo de câmbio"
          className="register--input"
          onChange={handleChangeValues}
        />
        <button
          className="register--button"
          onClick={() => handleClickButton()}
        >
          Cadastrar
        </button>
      </div>
      { typeof listCars !== "undefined" && listCars.map((value) => {
      return (
      <Card 
      key={value.id} 
      ListCard={listCars} 
      setListCard={setListCars}  
      id={value.id}
      marca={value.marca}
      modelo={value.modelo}
      cor={value.cor}
      ano_fab={value.ano_fab}
      ano_mod={value.ano_mod}
      tipo_camb={value.tipo_camb}
      ></Card>
      )
      })}
    </div>
  )
}

export default App;

import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../Funciones/funciones";

const Personaje = () => {
  // Aqui nos dan el id del url
  const [personaje, setPersonaje] = useState(null)
  const params = useParams()

  useEffect (()=> {
      unicoPersonaje(params.id, setPersonaje)
  },[])

  return (
    <>
    {/* Con esto valida que los datos llegaron de manera correcta */}
     {personaje !== null ? (
      <div>
        <h2> Personaje con el id {params.id}</h2>
        <p> con el nombre {personaje.name} </p>
        <img src={personaje.image} alt="" />
      </div>
     ):('no hay personaje')}
    </>
  )
}

export default Personaje;

import React, {useEffect, useState} from "react";
import { todosPersonajes } from "../Funciones/funciones";

const Inicio = () => {
  const [ personajes, setPersonajes] = useState(null)

    useEffect (()=> {
      todosPersonajes(setPersonajes)
     },[])

  return (
    //Fragment (Contenedor) virtual
    // Si es true hay personajes, si es false no hay personajes
    <>
    {personajes != null ? (
      personajes.map(personaje => (
        <div key={personaje.id}>
          <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
        </div>
      ))
    ): ('no hay personajes')}
 
    </>

  )
}
export default Inicio;
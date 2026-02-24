import React from "react";
import useModelo from "../hooks/useModelo";
import TarjetaModelo from "./TarjetaModelo";



export default function ListaModelos (){

    const { modelo, estaCargando , errorMsj} = useModelo ();

    if(estaCargando) return <h2>Esta cargando Medelo de Motos</h2>;
    if (errorMsj) return  <h2> Hubo un error: {errorMsj}</h2>;
    if (modelo.length === 0)  return<h2>No hay marcas registradas</h2>

    return (
        <div className="contenedor-modelo">
            {modelo.map((item)=>
            <TarjetaModelo
             key= {item.id}
            modelo={item}
            />

         )}
        </div>
    );
}
import React from "react";
import useMarcas from "../hooks/useMarcas";
import TarjetaMarca from "./TajetaMarca";


function ListaMarca (){
    //extraemos la informacion del Hooks

const { marcas, estaCargando, errorMsj} = useMarcas();

if (estaCargando) return <h2>Cargando marcas de motos</h2>;
if (errorMsj) return <h2>hubo un error: {errorMsj}</h2>;
if (marcas.length === 0) return <h2>No hay marcas registradas.</h2>

return (
    <div className='contenedor-marcas'>
      {marcas.map((item) => (
        <TarjetaMarca 
          key={item.id} 
          marca={item} 
          // alHacerClic={alSeleccionar} 
        />
      ))}
    </div>
  );

}

export default ListaMarca;
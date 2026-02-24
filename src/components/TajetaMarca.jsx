import React from 'react';
import '../components/tarjetasStyles/TarjetaMarcas.css'

function TarjetaMarca({ marca, alHacerClic }) {
  return (
    <div 
      className="tarjeta-marca" 
      // onClick={() => alHacerClic(marca.id, marca.nombre)}
    >
      <h3 className="titulo-marca">{marca.nombre}</h3>
      
      {marca.imagen_url ? (
        <img 
          src={marca.imagen_url} 
          alt={marca.nombre} 
          className='imagen-marca'
        />
      ) : (
        <div className="sin-imagen">Sin logo disponible</div>
      )}
    </div>
  );
}

export default TarjetaMarca;
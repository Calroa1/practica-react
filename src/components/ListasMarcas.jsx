import React, { useState, useEffect } from 'react';
import { getMarcas } from '../services/api';
import './listasMarcas.css'

function ListaMarcas({alSeleccionar}) {
  // Estados siguiendo el estándar de tu curso
  const [marcas, setMarcas] = useState([]);
  const [estaCargando, setEstaCargando] = useState(true);
  const [errorMsj, setErrorMsj] = useState(null);

  useEffect(function() {
    
    // Función para obtener los datos
    async function cargarDatos() {
      try {
        const datos = await getMarcas();
        setMarcas(datos);
      } catch (err) {
        setErrorMsj(err.message);
      } finally {
        setEstaCargando(false);
      }
    }

    cargarDatos();

  }, []); // [] para que solo se ejecute una vez

  // --- Lógica de renderizado (Página 41 del PDF) ---

  if (estaCargando) {
    return <h2>Cargando marcas de motos...</h2>;
  }

  if (errorMsj) {
    return <h2>Hubo un error: {errorMsj}</h2>;
  }

  if (marcas.length === 0) {
    return <h2>No hay marcas registradas todavía.</h2>;
  }

  return (
    <div className='contenedor-marcas' >
      {marcas.map(function(marca) {
        // Consola para debug: abre la consola del navegador (F12) 
        // y mira si 'imagen_url' tiene la dirección correcta
        console.log("Datos de la marca:", marca);

        return (
          <div 
          key={marca.id} 
          className="tarjeta-marca" 
          onClick={function() { 
            console.log('Datos de la marca Clickeada', marca);
            alSeleccionar(marca.id, marca.nombre);
           }}
          style={{ cursor: 'pointer' }} // Para que salga la manito
          >
            
            <h3 style={{
            fontSize: '24px',          // Tamaño de la letra
            fontFamily: 'Arial, sans-serif', // Tipo de letra (más limpia)
            fontWeight: 'bold',         // Grosor de la letra
            color: '#2c3e50',           // Color azul oscuro profesional
            marginTop: '10px',          // Espacio arriba
            textTransform: 'uppercase', // Todo en mayúsculas (opcional)
            letterSpacing: '1px'        // Espacio entre letras
            }}>{marca.nombre}</h3>
            
            {/* 1. Verifica que el nombre coincida: marca.imagen_url */}
            {marca.imagen_url ? (
              <img 
                src={marca.imagen_url} 
                alt={marca.nombre} 
                className='imagen-marca'
                // Si la URL está rota o mal, esto te avisará:
                onError={function(e) { console.error("Error cargando imagen de: " + marca.nombre); }}
              />
            ) : (
              <p>No hay URL guardada en la base de datos</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ListaMarcas;
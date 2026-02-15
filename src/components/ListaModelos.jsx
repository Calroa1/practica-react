import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

function ListaModelos({ marcaId, nombreMarca,alSeleccionarModelo }) {
  const [modelos, setModelos] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(function() {
    // Si no hay marca seleccionada, no buscamos nada
    if (!marcaId) return;

    async function obtenerModelos() {
      setCargando(true);

      console.log ('buscado modelos para la marca Id', marcaId);
      const { data, error } = await supabase
        .from('modelos_motos') // Asegúrate que tu tabla se llame 'modelos'
        .select('*')
        .eq('id_de_marca', marcaId); // Filtro dinámico

      if (!error) setModelos(data);
      setCargando(false);
    }

    obtenerModelos();
  }, [marcaId]); // Se ejecuta cada vez que cambia la marca seleccionada

  if (!marcaId) return <p style={{textAlign: 'center'}}>Selecciona una marca para ver sus modelos.</p>;
  if (cargando) return <p style={{textAlign: 'center'}}>Cargando modelos...</p>;

  return (
    <div style={{ marginTop: '30px', borderTop: '2px solid #eee', paddingTop: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Modelos de {nombreMarca}</h2>
      <div className="contenedor-marcas"> {/* Reutilizamos tu estilo de cuadritos */}
        {modelos.length === 0 ? (
          <p>No hay modelos registrados para  esta marca.</p>
        ) : (
          modelos.map(function(modelo) {
            return (
              <div key={modelo.id} className="tarjeta-marca"
              onClick={()=>alSeleccionarModelo(modelo.id)} 
    
              style={{ height: 'auto', minHeight: '100px', cursor: 'pointer' }}>
                <h3 className="nombre-marca">{modelo.nombre_modelo}</h3>
                <p>{modelo.cilindrada} </p>
                {modelo.modelo_url ? (
         <img 
            src={modelo.modelo_url} 
            alt={modelo.nombre_modelo} 
            style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} 
             />
  ) : (
    <p style={{ fontSize: '12px', color: 'gray' }}>Sin imagen disponible</p>
  )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ListaModelos;
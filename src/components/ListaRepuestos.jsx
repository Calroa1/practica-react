import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

function ListaRepuestos({ modeloId }) {
  const [repuestos, setRepuestos] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (!modeloId) return;

    async function cargarRepuestos() {
      setCargando(true);
      const { data, error } = await supabase
        .from('compatibilidad')
        .select(`
          identificacion,
          modelo_id,
          repuestos (
            identificación,
            nombre,
            precio,
            SKU
          )
        `)
        .eq('modelo_id', modeloId);

      if (error) {
        console.error("Error detallado:", error.message);
      } else if (data) {
        // Extraemos los repuestos y filtramos nulos
        const listaLimpia = data.map(item => item.repuestos).filter(r => r !== null);
        setRepuestos(listaLimpia);
      }
      setCargando(false);
    }

    cargarRepuestos();
  }, [modeloId]);

  if (!modeloId) return <p>Selecciona un modelo para ver repuestos.</p>;
  if (cargando) return <p>Cargando repuestos...</p>;

  return (
    <div className="seccion-repuestos">
      <h2>Repuestos Disponibles</h2>
      <div className="contenedor-repuestos">
        {repuestos.length > 0 ? (
          repuestos.map((repuesto) => (
            // IMPORTANTE: Usamos repuesto.identificación como key
            <div key={repuesto.identificación} className="tarjeta-repuesto">
              {/* Cambiado de nombre_repuesto a nombre */}
              <h4>{repuesto.nombre}</h4>
              
              {/* SKU en mayúsculas como en tu tabla */}
              <p className="sku">SKU: <strong>{repuesto.SKU || 'N/A'}</strong></p>
              
              <p className="precio">Precio: ${repuesto.precio}</p>
              <button className="boton-comprar">Ver detalle</button>
            </div>
          ))
        ) : (
          <p>No hay repuestos compatibles para este modelo.</p>
        )}
      </div>
    </div>
  );
}

export default ListaRepuestos;
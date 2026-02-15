import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

function ListaRepuestos({ modeloId }) {
  const [repuestos, setRepuestos] = useState([]);

  useEffect(() => {
    if (!modeloId) return;

    async function cargarRepuestos() {
      const { data, error } = await supabase
        .from('repuestos') // Tu tabla de repuestos
        .select('*')
        .eq('id_modelo', modeloId); // La relación que creamos antes

      if (!error) setRepuestos(data);
    }
    cargarRepuestos();
  }, [modeloId]);

  if (!modeloId) return null;

  return (
    <div className="seccion-repuestos">
      <h2>Repuestos Disponibles</h2>
      <div className="contenedor-repuestos">
        {repuestos.map((repuesto) => (
          <div key={repuesto.id} className="tarjeta-repuesto">
            <h4>{repuesto.nombre_repuesto}</h4>
            <p>Precio: ${repuesto.precio}</p>
            <button className="boton-comprar">Ver detalle</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaRepuestos;
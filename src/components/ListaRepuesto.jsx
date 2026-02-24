import React from 'react';
import { useRepuestos } from '../hooks/useRepuestos';
import TarjetaRepuesto from './TarjetaRepuesto'; // Importamos el nuevo módulo
import '../components/tarjetasStyles/ListasRepuestos.css'

function ListaRepuesto() {
    const { repuestos, estaCargando, errorMsj } = useRepuestos();

    if (estaCargando) return <h2 className="mensaje">Cargando inventario de repuestos...</h2>;
    if (errorMsj) return <h2 className="mensaje error">Hubo un problema: {errorMsj}</h2>;

    return (
        <div className="contenedor-repuestos">
            <h2 className="titulo-seccion">Inventario de Repuestos</h2>
            <div className="grid-repuestos">
                {repuestos.map((repuesto) => (
                    <TarjetaRepuesto 
                        key={repuesto.id} 
                        repuesto={repuesto} 
                    />
                ))}
            </div>
        </div>
    );
}

export default ListaRepuesto;
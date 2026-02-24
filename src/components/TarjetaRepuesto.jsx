import React from 'react';
import '../components/tarjetasStyles/TarjetasRepuestos.css'

// Recibe "repuesto" como prop desde el componente padre
function TarjetaRepuesto({ repuesto }) {
    // Formateador de moneda opcional para que el precio se vea mejor
    const precioFormateado = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(repuesto.precio);

    return (
        <div className="tarjeta-repuesto">
            <div className="contenedor-imagen">
                {repuesto.imagen_url ? (
                    <img src={repuesto.imagen_url} alt={repuesto.nombre} />
                ) : (
                    <div className="placeholder-img">Sin Imagen</div>
                )}
            </div>
            
            <div className="cuerpo-tarjeta">
                <div className="badge-categoria">{repuesto.categoria || 'Repuesto'}</div>
                <h3>{repuesto.nombre}</h3>
                <p className="descripcion">{repuesto.descripcion}</p>
                
                <div className="info-footer">
                    <span className="precio">{precioFormateado}</span>
                    <span className={`stock ${repuesto.stock > 0 ? 'disponible' : 'agotado'}`}>
                        {repuesto.stock > 0 ? `Stock: ${repuesto.stock}` : 'Agotado'}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TarjetaRepuesto;
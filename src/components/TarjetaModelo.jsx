import React from "react";
import './tarjetasStyles/TarjetaModelos.css';

export default function TarjetaModelo({ modelo }) {
    if (!modelo) return null;

    return (
        <div className="moto-card">
            <div className="moto-card-image">
                <img 
                    src={modelo.modelo_url} 
                    alt={modelo.nombre_modelo} 
                />
            </div>
            <div className="moto-card-content">
                <h3 className="moto-title">{modelo.nombre_modelo}</h3>
                
            </div>
        </div>
    );
}
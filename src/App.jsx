import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ListaMarcas from './components/ListasMarcas';
import ListaModelos from './components/ListaModelos';
import ListaRepuestos from './components/ListaRepuestos';

function App() {
  // 1. ESTADOS (Siempre al principio)
  const [seleccion, setSeleccion] = useState({ id: null, nombre: "" });
  const [modeloSeleccionadoId, setModeloSeleccionadoId] = useState(null);

  // 2. FUNCIONES DE MANEJO
  function manejarSeleccionMarca(id, nombre) {
    setSeleccion({ id: id, nombre: nombre });
    // Limpiamos el modelo anterior si el usuario cambia de marca
    setModeloSeleccionadoId(null);
  }

  function manejarSeleccionModelo(id) {
    setModeloSeleccionadoId(id);
  }

  return (
    <div className="App">
      <Header />
      
      <main>
        {/* Paso 1: Seleccionar Marca */}
        <ListaMarcas alSeleccionar={manejarSeleccionMarca} />

        {/* Paso 2: Mostrar modelos de esa marca */}
        <ListaModelos
          marcaId={seleccion.id}
          nombreMarca={seleccion.nombre}
          alSeleccionarModelo={manejarSeleccionModelo} 
        />

        {/* Paso 3: Mostrar repuestos de ese modelo */}
        <ListaRepuestos modeloId={modeloSeleccionadoId} />
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
        &copy; 2024 MotoRepuestos - Gestión de Inventario
      </footer>
    </div>
  );
}

export default App;
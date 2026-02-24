import React from 'react';
import './App.css';
import Header from './components/Header';
import ListaMarca from './components/ListasMarca';
import ListaRepuesto from './components/ListaRepuesto';
import ListaModelos from './components/ListaModelos';
 // Asegúrate que el nombre del archivo sea ListasMarca.jsx

function App() {
  // Por ahora, como solo queremos ver las marcas, 
  // no necesitamos estados ni funciones de manejo aquí.

  return (
    <div className="App">
      <Header />
      
      <main>
        {/* Paso 1: Seleccionar Marca */}
        {/* Solo dejamos este componente activo */}
        <ListaMarca />
        <hr/>

        <ListaModelos/>
        <hr/>
        <ListaRepuesto/>

        {/* Paso 2 y 3: Los mantenemos comentados para que no den error */}
        {/* <ListaModelos /> 
          <ListaRepuestos /> 
        */}
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
        &copy; 2024 MotoRepuestos - Gestión de Inventario
      </footer>
    </div>
  );
}

export default App;
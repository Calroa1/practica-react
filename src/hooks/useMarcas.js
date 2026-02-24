import { useState, useEffect} from 'react';
import { getDatosMarcas, } from '../services/api';

//Los Custom Hooks simpre empiezan con la palabra "use"
function useMarcas(){
    const [marcas, setMarcas] = useState([]);
    const [estaCargando, setEstaCargando] = useState(true);
    const [errorMsj, setErrorMsj] = useState(null);

    useEffect (() =>{
        async function cargarDatosMarcas() {
            try{
                setEstaCargando (true);
                const datos = await getDatosMarcas();
                setMarcas(datos);
            } catch (err){
                setErrorMsj(err.message);
            } finally{
                setEstaCargando (false);
            }
            
        }

        cargarDatosMarcas();
    }, []);

// ¡IMPORTANTE! Debes devolver los estados para que el componente los vea
  return { marcas, estaCargando, errorMsj };

}

export default useMarcas;
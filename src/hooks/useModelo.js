import { useEffect, useState } from "react";
import { getDatosModelos } from "../services/api";

function useModelo(){
    const [modelo, setModelo] = useState([]);
    const [estaCargando, setEstaCargando] = useState(true);
    const [errorMsj, setErrorMsj] = useState(null);

    useEffect (()=>{
        async function cargarDatosModelos() {
            try{
                setEstaCargando (true);
                const datos = await getDatosModelos();
                setModelo (datos);
            }catch (err){
                setErrorMsj(err.message);
            }finally{
                setEstaCargando(false);
            }
            
        }
        cargarDatosModelos();
    }, []);

    return {modelo, estaCargando, errorMsj};
}

export default useModelo;
import { useState, useEffect } from 'react';
import { getTodosLosRepuestos } from '../services/api';

export function useRepuestos() {
    const [repuestos, setRepuestos] = useState([]);
    const [estaCargando, setEstaCargando] = useState(true);
    const [errorMsj, setErrorMsj] = useState(null);

    useEffect(() => {
        async function cargar() {
            try {
                setEstaCargando(true);
                const datos = await getTodosLosRepuestos();
                setRepuestos(datos);
            } catch (err) {
                setErrorMsj(err.message);
            } finally {
                setEstaCargando(false);
            }
        }
        cargar();
    }, []);

    return { repuestos, estaCargando, errorMsj };
}
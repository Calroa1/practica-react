import { supabase } from "../lib/supabaseClient";

export async function getDatosMarcas() {
    const {data, error} = await supabase
    .from ('marcas')
    .select ('*');

    if (error){
        throw new Error ('Error al obtener las marcas:' + error.message);
    }
    
    return data;
}

export async function getTodosLosRepuestos() {
    const { data, error} = await supabase
    .from('repuestos')
    .select('*');

    if (error){
        throw new Error ('Error al obtener los respuestos' + error.massge);
    }
    return data;
}

export async function getDatosModelos() {
    const {data, error} = await supabase
    .from('modelos_motos')
    .select('*');

    if (error){
        throw new Error ('Error al obtener los Modelos' + error.massge);
    }
    return data;
    
}
import { supabase } from "../lib/supabaseClient";

export async function getMarcas() {
    const {data, error} = await supabase
    .from ('marcas')
    .select ('*');

    if (error){
        throw new Error ('Error al obtener las marcas:' + error.message);
    }
    
    return data;
}
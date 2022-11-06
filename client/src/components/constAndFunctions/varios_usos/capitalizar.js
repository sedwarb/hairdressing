export function capitalizar(cadena){
    return cadena.toString().replace(/^\w/, c => c.toUpperCase())
}
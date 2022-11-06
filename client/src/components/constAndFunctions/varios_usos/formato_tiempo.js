export function formato_tiempo(hora_minuto,dato){
    let ndato = new Date(dato)
    if(hora_minuto==="hora") return ndato.getHours()<10?`0${ndato.getHours()}`:ndato.getHours()
    else return ndato.getMinutes()<10?`${ndato.getMinutes()}0`:ndato.getMinutes()    
}
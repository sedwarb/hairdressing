'usuario'.charCodeAt(0)



function cadena(caracter){
    let ncadena
    for (let i = 0; i < caracter.length; i++) {
        ncadena?ncadena=ncadena+caracter.charCodeAt(i).toString():ncadena=caracter.charCodeAt(i).toString()
    }
    return ncadena
}
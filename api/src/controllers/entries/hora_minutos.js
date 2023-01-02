function fecha_hora(fecha){
    let fechaHora = {}
    fechaHora.hora=fecha.getHours().toString().length>1?
        fecha.getHours().toString():
        `0${fecha.getHours().toString()}`
    fechaHora.minutos=fecha.getMinutes().toString().length>1?
        fecha.getMinutes().toString():
        `${fecha.getMinutes().toString()}0`
    return fechaHora
}

module.exports={
    fecha_hora
}
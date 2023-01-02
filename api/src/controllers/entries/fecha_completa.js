const {fecha_hora} = require('./hora_minutos')

function fechaCompleta(fecha){
    return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getUTCFullYear()} ${fecha_hora(fecha).hora}:${fecha_hora(fecha).minutos}`
}

module.exports = {
    fechaCompleta
}
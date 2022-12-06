export default function fechaGuardar(){
    let fecha = new Date()
    return `${fecha.getFullYear()}/${fecha.getMonth()+1}/${fecha.getDate()}`
}
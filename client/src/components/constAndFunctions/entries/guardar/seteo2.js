export default function seteo2(setEntries,entries,caso){
    let entrada = { 
        ...entries, 
        estado: "",
        estadoI:false
    }
    if(caso){
        entrada.estado = "Debe completar los datos Servicio y Trabajador"
        setEntries(entrada)
    }else{
        entrada.estado = "Debe llenar los campos manuales"
        setEntries(entrada)
    }
}
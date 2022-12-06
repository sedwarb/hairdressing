export default function seteo(setEntries,entries,caso){
    let entrada = { 
        ...entries, 
        estado: "", 
        telephone: null,
        nomUsu:null,
        manualEntry:null,
        amountEntry:null,
        estadoI:false
    }
    if(caso){
        entrada.estado = "No se Guardo la informacion"
        setEntries(entrada)
    }else{
        entrada.estado ="Registro Guardado Exitosamente"
        entrada.estadoI = true
        setEntries(entrada)
    }
}
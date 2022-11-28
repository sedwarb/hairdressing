import { onSubmit } from "../entries/onSubmit"

export function guardar(entries,setEntries){
    let encontro = entries.citas.slice(1).find(item=>item.date.split(" ")[1].split(":")[0]===entries.hora.split(":")[0])
        
    if(entries.hora && entries.workerId && encontro===undefined && entries.telephone){
        if(entries.citas.length>=1){
            if(onSubmit(datos(entries),true)){
                setEntries(
                    { 
                        ...entries, 
                        estado: casos().uno,
                        estadoI:true,
                        oculto1:false,
                        oculto2:false
                    }
                )
            }else{
                setEntries(
                    { 
                        ...entries, 
                        estado: casos().dos,
                        estadoI:false
                    }
                )
            }
        }else{
            setEntries({ ...entries, estado: casos().tres,estadoI:false})
        }        
    }else {
        encontro?setEntries({ ...entries, estado: casos().cuatro,estadoI:false}):
        setEntries({ ...entries, estado: casos().cinco,estadoI:false})
    }
}

function datos(entries){
    return {
        serviceId:entries.serviceId,
        fecha:entries.fecha,
        hora:entries.hora,
        workerId:entries.workerId,
        telephone:entries.telephone
    }
}

function casos(){
    return {
        uno:"Registro Guardado Exitosamente",
        dos:"Error Al guardar el registro",
        tres:"Debe consultar la fecha y el trabajador",
        cuatro:"la hora ya esta ocupada",
        cinco:"Debe llenar los datos hora, servicio y usuario"
    }
}
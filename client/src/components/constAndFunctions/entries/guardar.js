import {validar_inma} from '../entries/validar_inma'
import {onSubmit} from '../entries/onSubmit'

export async function guardar(entries,setTabla,setEntries,tabla){
    if(entries.telephone!==null ? entries.nomUsu===null ? false : true : true){
        if(entries.serviceId.valor==="inma"?validar_inma(entries):true){
            if(entries.workerId && entries.serviceId){
                let fecha = new Date()
                setTabla([...tabla,
                {
                    date: `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`,
                    manualEntry: entries.serviceId.valor === "inma"?
                        entries.manualEntry : "No Aplica",
                    amountEntry: entries.serviceId.valor === "inma"?
                        entries.amountEntry : entries.serviceId.monto,
                    user: entries.telephone ? entries.nomUsu : "Usuario Generico",
                    worker: entries.workerId.nombre,
                    service: entries.serviceId.nombre
                }
                ])
                setEntries({ ...entries, userName: "" })
                document.querySelector('#manualEntry').value = ""
                document.querySelector('#amountEntry').value = ""
                document.querySelector('#telephone').value = ""
                document.querySelector('#userName').value = ""
                let status = await onSubmit(entries)
                if(status){
                    setEntries(
                        { 
                            ...entries, 
                            estado: "No se Guardo la informacion", 
                            telephone: null,
                            nomUsu:null,
                            manualEntry:null,
                            amountEntry:null,
                            estadoI:false
                        }
                    )    
                }else{
                    setEntries(
                        { 
                            ...entries, 
                            estado: "Registro Guardado Exitosamente", 
                            telephone: null,
                            nomUsu:null,
                            manualEntry:null,
                            amountEntry:null,
                            estadoI:true
                        }
                    )
                }
            }else{
                setEntries(
                    { 
                        ...entries, 
                        estado: "Debe completar los datos Servicio y Trabajador",
                        estadoI:false
                    }
                )
            }
        }else{
            setEntries(
                { 
                    ...entries, 
                    estado: "Debe llenar los campos manuales",
                    estadoI:false
                }
            )
        }
    }else setEntries({ ...entries, telephone: null,nomUsu:null })
}
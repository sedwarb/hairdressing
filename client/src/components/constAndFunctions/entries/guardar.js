import {validar_inma} from '../entries/validar_inma'
import {onSubmit} from '../entries/onSubmit'

export function guardar(entries,setTabla,setEntries,tabla){
    if(entries.telephone!==null ? entries.nomUsu===null ? false : true : true){
        if(entries.serviceId.valor==="inma"?validar_inma(entries):true){
            if(entries.workerId && entries.serviceId){
                let fecha = new Date()
                setTabla([...tabla,
                {
                    date: `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`,
                    manualEntry: entries.serviceId.valor === "inma" ? entries.manualEntry : "No Aplica",
                    amountEntry: entries.serviceId.valor === "inma" ? entries.amountEntry : entries.serviceId.monto,
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
                onSubmit(entries)
                setEntries({ ...entries, telephone: null,nomUsu:null,manualEntry:null,amountEntry:null })
            }else alert("Debe completar los datos Servicio y Trabajador")
        }else alert("Debe llenar los campos manuales")
    }else setEntries({ ...entries, telephone: null,nomUsu:null })
}
import {onSubmit} from '../entries/onSubmit'
import fechaFormato from './guardar/fechaFormato'
import ingresoManual from './guardar/ingresoManual'
import serviceId from './guardar/serviceId';
import seteo from './guardar/seteo';
import seteo2 from './guardar/seteo2';
import telephone from './guardar/telephone';

export async function guardar(entries,setTabla,setEntries,tabla){
    if(telephone(entries)){
        if(serviceId(entries)){
            if(entries.workerId && entries.serviceId){
                setTabla([...tabla,
                {
                    date: fechaFormato(),
                    manualEntry: ingresoManual(entries, true),
                    amountEntry: ingresoManual(entries, false),
                    user: entries.telephone ? entries.nomUsu : "Usuario Generico",
                    worker: entries.workerId.nombre,
                    service: entries.serviceId.nombre
                }
                ])
                setEntries({ ...entries, userName: "" })
                document.querySelector('#manualEntry').value = ""
                document.querySelector('#amountEntry').value = ""
                document.querySelector('#telephone').value = ""
                let status = await onSubmit(entries)
                if(status){
                    seteo(setEntries,entries,true)
                }else{
                    seteo(setEntries,entries,false)
                }
            }else{
                seteo2(setEntries,entries,true)
            }
        }else{
            seteo2(setEntries,entries,false)
        }
    }else setEntries({ ...entries, telephone: null,nomUsu:null })
}
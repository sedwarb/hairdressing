import {DB_HOST} from '../constAndFunions'
import fechaGuardar from './onSubmit/fechaGuardar'
import arreglafyh from './onSubmit/arreglafyh'
import telephoneOnsub from './onSubmit/telephoneOnsub'
import setOnsub from './onSubmit/setOnsub'


export async function onSubmit(stateGen,tipo) {
    let devolucion = null    
    let enviar_f=true
    if(stateGen.serviceId.valor==="inma" && (!stateGen.manualEntry || !stateGen.amountEntry)){
       enviar_f=false
    }
    const options = {method: "POST",headers:{"Content-Type": "application/json"},
    body: JSON.stringify(
        {
            entryType:tipo?"meeting":"entry",
            date:tipo?arreglafyh(stateGen.fecha,stateGen.hora):fechaGuardar(),
            serviceId:stateGen.serviceId.valor,
            workerId:stateGen.workerId.valor,
            userPhoneNumber:telephoneOnsub(stateGen,tipo),
            manualEntry:stateGen.serviceId.valor==="inma"?stateGen.manualEntry:"",
            amountEntry:stateGen.serviceId.valor==="inma"?parseFloat(stateGen.amountEntry):0
        }
    )}
    
    if(enviar_f===true){
        fetch(`http://${DB_HOST}:3001/entries`,options)
        .then(response => devolucion=true)
        .catch(error =>devolucion=null)
    }else{
        devolucion=null
    }
    return devolucion
}

export async function verificarUsuario(estado,setEntries){
    let foundWPhoneN,foundWName
    fetch(`http://${DB_HOST}:3001/user`)
    .then(res=>res.json())
    .then(usuarios=>{        
        foundWPhoneN = usuarios.find(element => element.phoneNumber === estado.telephone)
        foundWName = usuarios.find(element => element.fullname === estado.userName)
        if (estado.telephone && estado.userName) {
            if (foundWPhoneN) {
                //Sin Uso
            } else {
                if (foundWName) {
                    //Sin Uso
                }
                else {                    
                    const options = {
                        method: "POST", 
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(
                            {
                                phoneNumber:estado.telephone,
                                fullname:estado.userName
                            }
                        )
                    }                    
                    fetch(`http://${DB_HOST}:3001/user`,options)
                    .then(() => setOnsub(estado,setEntries,"guardado"))
                    .catch(()=>setOnsub(estado,setEntries,"NO guardado"))
                }
            }
        }else if(estado.telephone){
            if (foundWPhoneN){
                const nomUsu=usuarios.filter(usu=>usu.phoneNumber===estado.telephone)[0].fullname
                setOnsub(estado,setEntries,"registrado",nomUsu)
            }
            else {                
                setOnsub(estado,setEntries,"No registrado")
            }
        }else setOnsub(estado,setEntries,"llenar")
    })
}

export function fechaAEnviar(fecha){
    let hora="00",minuto="00"
    if(fecha.hora){
        if(fecha.hora.length<2){
            fecha.turno==="pm"?hora = `${parseInt(fecha.hora)+12}`:hora = `0${fecha.hora}`
        }else {
            fecha.turno==="pm"?hora = `${parseInt(fecha.hora)+12}`:hora =`${fecha.hora}`            
        }
    }
    if(fecha.minutos)fecha.minutos.length<2?minuto = `0${fecha.minutos}`:minuto =`${fecha.minutos}`
        
    return `${JSON.stringify(fecha.value).split("T")[0]} ${hora}:${minuto}`
}
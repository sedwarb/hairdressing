import {DB_HOST} from '../constAndFunions'

export async function onSubmit(stateGen) {
    let fecha = new Date()
    let enviar_f=true
    if(stateGen.serviceId==="inma" && (!stateGen.manualEntry || !stateGen.amountEntry)){
       console.log("Un Campo Manual esta vacio")
       enviar_f=false
    }
    const options = {method: "POST",headers:{"Content-Type": "application/json"},
    body: JSON.stringify(
        {
            entryType:"entry",
            date:`${fecha.getFullYear()}/${fecha.getMonth()+1}/${fecha.getDate()}`,
            serviceId:stateGen.serviceId.valor,
            workerId:stateGen.workerId.valor,
            userPhoneNumber:stateGen.telephone?stateGen.telephone:"3006007050",
            manualEntry:stateGen.serviceId==="inma"?stateGen.manualEntry:"",
            amountEntry:stateGen.serviceId==="inma"?parseFloat(stateGen.amountEntry):0
        }    
    )}
    
    if(enviar_f===true){        
        fetch(`http://${DB_HOST}:3001/entries`,options)
        .then(response => alert(`Se Guardo Exitosamente ${response.ok}`))
        .catch(error =>console.log(`Este fue el Error: ${error}`))
    }else{
        console.log("No se creo la entrada")
        alert("No Se Guardo, Revisar")
    }
}

export async function verificarUsuario(estado){
    let foundWPhoneN,foundWName
    fetch(`http://${DB_HOST}:3001/user`)
    .then(res=>res.json())
    .then(usuarios=>{        
        foundWPhoneN = usuarios.find(element => element.phoneNumber === estado.telephone)
        foundWName = usuarios.find(element => element.fullname === estado.userName)
        if (estado.telephone && estado.userName) {
            if (foundWPhoneN) {
                foundWName?alert(`Hay un usuario registrado con ese ID y Nombre`):
                alert("Hay un usuario con ese nombre")
            } else {
                if (foundWName) alert("Se encontro el Nombre Pero no Coincide el ID")
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
                    .then(response => {
                        estado.findUser=false
                        estado.nomUsu=estado.userName
                        alert(`Se Guardo Exitosamente ${response.ok}`)
                    })
                    .catch(error =>console.log(`Error en Fetch crear usuario: ${error}`))                    
                }
            }
        }else if(estado.telephone){
            if (foundWPhoneN){
                estado.nomUsu=usuarios.filter(usu=>usu.phoneNumber===estado.telephone)[0].fullname
                alert(`Un usuario registrado con ese ID`)                
            }
            else {                
                estado.findUser=true
                alert("Usuario no encontrado, Ingrese el Nombre para crearlo")
            }
        }else alert("Debe llenar el campo ID")
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
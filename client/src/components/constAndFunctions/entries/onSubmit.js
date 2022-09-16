import {DB_HOST} from '../constAndFunions'

export async function onSubmit(e,stateGen) {    
    e.preventDefault();
    /* Verificar si un usuario existe, si no existe guarda el que se ingreso*/

    let enviar_f=true
    if(stateGen.listSt.serviceId==="inma" && (!stateGen.manual || !stateGen.precio)){
       console.log("Un Campo Manual esta vacio")
       enviar_f=false
    }
    const options = {method: "POST",headers:{"Content-Type": "application/json"},
    body: JSON.stringify(
        {
            entryType:stateGen.entrada,
            date:fechaAEnviar(stateGen),
            serviceId:stateGen.listSt.serviceId,
            workerId:stateGen.listSt.workerId,
            userPhoneNumber:stateGen.telephone?stateGen.telephone:"3006007050",
            manualEntry:stateGen.listSt.serviceId==="inma"?stateGen.manual:"",
            amountEntry:stateGen.listSt.serviceId==="inma"?parseFloat(stateGen.precio):0
        }
        //falta terminar la funcion verificarUsuario
    
    )};
    if(enviar_f===true){
        fetch(`http://${DB_HOST}:3001/entries`,options)
        .then(response => alert(`Se Guardo Exitosamente ${response.ok}`))
        .catch(error =>console.log(`Este fue el Error: ${error}`))
    }else{
        console.log("No se creo la entrada")
        alert("No Se Guardo, Revisar")
    }
}

async function verificarUsuario(telefono,nombre){
    const usuarios = await fetch(`http://localhost:3001/user`)
    const found = usuarios.find(element => element.phoneNumber === telefono)

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
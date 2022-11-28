import {DB_HOST} from '../constAndFunions'

export async function onSubmit(stateGen,tipo) {
    let fecha = new Date()
    let devolucion = null
    function arreglafyh(fecha,hora){
        return `${fecha.split("-")[0]}/${fecha.split("-")[1]}/${fecha.split("-")[2]} ${hora}:00.59`
    }
    let enviar_f=true
    if(stateGen.serviceId.valor==="inma" && (!stateGen.manualEntry || !stateGen.amountEntry)){
       enviar_f=false
    }
    const options = {method: "POST",headers:{"Content-Type": "application/json"},
    body: JSON.stringify(
        {
            entryType:tipo?"meeting":"entry",
            date:tipo?
                arreglafyh(stateGen.fecha,stateGen.hora):
                `${fecha.getFullYear()}/${fecha.getMonth()+1}/${fecha.getDate()}`,
            serviceId:stateGen.serviceId.valor,
            workerId:stateGen.workerId.valor,
            userPhoneNumber:tipo?
                stateGen.telephone:
                stateGen.telephone?
                    stateGen.telephone:"3006007050",
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
                foundWName?setEntries(
                    {
                        ...estado, 
                        estado:"Hay un usuario registrado con ese ID y Nombre",
                        estadoI:false
                    }
                ):
                setEntries({...estado, estado:"Hay un usuario con ese nombre",estadoI:false})
            } else {
                if (foundWName) {
                    setEntries(
                        {
                            ...estado, 
                            estado:"Se encontro el Nombre Pero no Coincide el ID",
                            estadoI:false
                        }
                    )
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
                    .then(response => {
                        setEntries(
                            {
                                ...estado, 
                                estado:"Se guardo exitosamente el Cliente",
                                estadoI:true,
                                oculto2:true,
                                findUser:false,
                                nomUsu:estado.userName,
                                userName:""
                            }
                        )
                    })
                    .catch(error =>{
                        console.log(`Error en Fetch crear usuario: ${error}`)
                        setEntries(
                            {
                                ...estado, 
                                estado:"No se Guardo el Cliente",
                                estadoI:false,
                                oculto2:false,
                                findUser:false
                            }
                        )
                    })
                }
            }
        }else if(estado.telephone){
            if (foundWPhoneN){
                const nomUsu=usuarios.filter(usu=>usu.phoneNumber===estado.telephone)[0].fullname
                setEntries(
                    {
                        ...estado, 
                        estado:`El Cliente ${nomUsu} esta registrado con ese ID`,
                        estadoI:true,
                        oculto2:true,
                        nomUsu:nomUsu,
                        findUser:false
                    }
                )
            }
            else {
                setEntries(
                    {
                        ...estado,
                        estado:"Usuario no encontrado, Ingrese el Nombre para crearlo",
                        estadoI:true,
                        oculto2:false,
                        findUser:true
                    }
                )
            }
        }else setEntries(
            {
                ...estado, 
                estado:"Debe llenar el campo ID",
                estadoI:false,
                oculto2:true,
                findUser:false
            }
        )
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
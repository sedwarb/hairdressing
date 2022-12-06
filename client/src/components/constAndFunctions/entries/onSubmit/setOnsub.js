export default function setOnsub(estado,setEntries,tipo,adicional){
    let seteo = {
        ...estado, 
        estado:"",
        estadoI:true,
        oculto2:true,
        findUser:false
    }
    if(tipo==="guardado"){
        seteo.estado="Se guardo exitosamente el Cliente"
        seteo.nomUsu=estado.userName
        seteo.userName=""
        seteo.estadoI=true
        setEntries(seteo)
    }
    if(tipo==="NO guardado"){
        seteo.estado="No se Guardo el Cliente"
        seteo.estadoI=false
        seteo.oculto2=false
        setEntries(seteo)
    }
    if(tipo==="registrado"){
        seteo.estado=`El Cliente ${adicional} esta registrado con ese ID`
        seteo.nomUsu=adicional
        seteo.estadoI=true
        setEntries(seteo)
    }
    if(tipo==="No registrado"){
        seteo.estado="Usuario no encontrado, Ingrese el Nombre para crearlo"
        seteo.oculto2=false
        seteo.findUser=true
        seteo.estadoI=false
        setEntries(seteo)
    }
    if(tipo==="llenar"){
        seteo.estado="Debe llenar el campo ID"
        seteo.estadoI=false
        setEntries(seteo)
    }
}
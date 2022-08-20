export const DB_HOST='192.168.20.20'

export function onSubmit(e,stateGen) {
    e.preventDefault();
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
    
    )};
    fetch(`http://${DB_HOST}:3001/entries`,options)
    .then(response => response.json())
    .catch(error =>console.log(`Este fue el Error: ${error}`))
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

export const stateGenCont = {
    value:new Date(),
    listSt:{workerId:"",serviceId:""},
    visible:false,
    entrada:"entry",
    visibleManual:false
}

export const typeList = {
    service:{
        typeL:"service",
        fieldL:"name",
        esp:"Servicios"
    },
    worker:{
        typeL:"worker",
        fieldL:"fullname",
        esp:"Trabajadores"
    }
}

export const typeTable = {
    user:[{str:"Numero de Telefono",name:"phoneNumber",sname:null},
    {str:"Nombre",name:"fullname",sname:null}],
    service:[{str:"Id",name:"id",sname:null},
    {str:"Servicio",name:"name",sname:null},
    {str:"Precio",name:"amount",sname:null},
    {str:"Informacion",name:"info",sname:null}],
    worker:[{str:"Id",name:"id",sname:null},
    {str:"Nombre",name:"fullname",sname:null}],
    entries:[{str:"Fecha",name:"date",sname:null},
    {str:"Manual",name:"manualEntry",sname:null},
    {str:"Monto",name:"amountEntry",sname:null},
    {str:"Usuario",name:"user",sname:"fullname"},
    {str:"Trabajador",name:"worker",sname:"fullname"},
    {str:"Servicio",name:"service",sname:"name"}]
}

export const horaMinTurn = {
    hora:[1,2,3,4,5,6,7,8,9,10,11,12],
    minutos:[0,5,10,15,20,25,30,35,40,45,50,55],
    turno:["am","pm"]
}

export const stateTable = {
    type:"",
    dbeg:"",
    dend:"",
    cdbeg:new Date(),
    cdend:new Date(),
    typed:"",
    send:false,
    tdate:"",
    firstTime:false,
    user:false,
    worker:false,
    service:false
}

export const tableFilter = [{str:"workerId",name:"Id Trabajador"},
{str:"phoneNumber",name:"Id Usuario"},
{str:"entry",name:"Citas"}]

export function cleanTableF(table){
    return {
            user:
            {
                ...table,
                type:"user",
                user:true,
                worker:false,
                service:false,
                dbeg:"",
                dend:"",
                cdbeg:"",
                cdend:"",
                typed:"",
                send:false,
                tdate:"",
                firstTime:false
            },
            worker:
            {
                ...table,
                type:"worker",
                worker:true,
                user:false,
                service:false,
                dbeg:"",
                dend:"",
                cdbeg:"",
                cdend:"",
                typed:"",
                send:false,
                tdate:"",
                firstTime:false
            },
            service:
            {
                ...table,
                type:"service",
                service:true,
                user:false,
                worker:false,
                dbeg:"",
                dend:"",
                cdbeg:"",
                cdend:"",
                typed:"",
                send:false,
                tdate:"",
                firstTime:false
            }
    }
}
/*
module.exports= {
    onSubmit,
    stateGenCont,
    typeList,
    horaMinTurn,
    typeTable,
    stateTable,
    cleanTableF,
    tableFilter,
    fechaAEnviar,
    DB_HOST
}*/
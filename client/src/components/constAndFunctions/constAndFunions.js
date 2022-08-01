function onSubmit(e,stateGen) {
    e.preventDefault();
    const options = {method: "POST",headers:{"Content-Type": "application/json"},
    body: JSON.stringify(
        {
            entryType:stateGen.entrada,
            date:stateGen.value,
            serviceId:stateGen.listSt.serviceId,
            workerId:stateGen.listSt.workerId,
            userPhoneNumber:stateGen.telephone?stateGen.telephone:"3006007050",
            manualEntry:stateGen.listSt.serviceId==="inma"?stateGen.manual:"",
            amountEntry:stateGen.listSt.serviceId==="inma"?parseFloat(stateGen.precio):0
        }
    
    )};
    fetch(`http://localhost:3001/entries`,options)
    .then(response => response.json())
    .catch(error =>console.log(`Este fue el Error: ${error}`))
}

const stateGenCont = {
    value:new Date(),
    listSt:{workerId:"",serviceId:""},
    visible:false,
    entrada:"entry"
}

const typeList = {
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

const typeTable = {
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

const horaMinTurn = {
    hora:[1,2,3,4,5,6,7,8,9,10,11,12],
    minutos:[0,5,10,15,20,25,30,35,40,45,50,55],
    turno:["am","pm"]
}

const stateTable = {
    type:"",
    dbeg:"",
    dend:"",
    cdbeg:"",
    cdend:"",
    typed:"",
    send:false,
    tdate:"",
    firstTime:false,
    user:false,
    worker:false,
    service:false
}

module.exports= {
    onSubmit,
    stateGenCont,
    typeList,
    horaMinTurn,
    typeTable,
    stateTable
}
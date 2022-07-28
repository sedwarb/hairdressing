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
    user:[{str:"Numero de Telefono",name:"phoneNumber"},
    {str:"Nombre",name:"fullname"}],
    service:[{str:"Id",name:"id"},
    {str:"Servicio",name:"name"},
    {str:"Precio",name:"amount"},
    {str:"Informacion",name:"info"}],
    worker:[{str:"Id",name:"id"},
    {str:"Nombre",
    name:"fullname"}]
}

const horaMinTurn = {
    hora:[1,2,3,4,5,6,7,8,9,10,11,12],
    minutos:[0,5,10,15,20,25,30,35,40,45,50,55],
    turno:["am","pm"]
}

module.exports= {
    onSubmit,
    stateGenCont,
    typeList,
    horaMinTurn,
    typeTable
}
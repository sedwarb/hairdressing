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

module.exports= {
    onSubmit,
    stateGenCont,
    typeList
}
const { User, Entry, Worker, Service } = require("../db.js");

async function loadAll(req, res){
    try{
        User.bulkCreate(users)
        Worker.bulkCreate(workers)
        Service.bulkCreate(services)
        Entry.bulkCreate(entries)
        res.send("Se Agrego Toda la Informacion")
    }catch(error){res.send(`Error: ${error}`)}
}

const users = [
{phoneNumber:"3006007050",fullname:"cliente generico"},
{phoneNumber:"4007008060",fullname:"edwar snowden"}]

const workers = [
{id:"1143961948",fullname:"paola gutierres"},
{id:"1144060519",fullname:"naomy rodriguez"},
{id:"38684947",fullname:"mailory chara"}]

const services = [
{id:"inma",name:"ingreso manual",amount:0,info:"precio requerido"},
{id:"corted",name:"corte de dama",amount:15000,info:""},
{id:"cortec",name:"corte de caballero",amount:14000,info:""},
{id:"maqfac",name:"maquillaje",amount:40000,info:""},
{id:"cejascu",name:"cejas cuchillas",amount:5000,info:""},
{id:"cejasce",name:"cejas cera",amount:10000,info:""},
{id:"pies",name:"pies",amount:10000,info:""},
{id:"manos",name:"manos",amount:10000,info:""},
{id:"mapi",name:"manos y pies",amount:20000,info:""},
{id:"pest",name:"pestanas",amount:16000,info:""},
{id:"vigc",name:"vigote cera",amount:5000,info:""},
{id:"unasg",name:"unas gel",amount:7000,info:""},
{id:"unassp",name:"unas semi permanentes",amount:35000,info:""},
{id:"hidrc",name:"hidratacion corto",amount:35000,info:""},
{id:"hidrl",name:"hidratacion largo",amount:55000,info:""},
{id:"ceraax",name:"cera axila",amount:10000,info:""},
{id:"lavado",name:"lavado de cabello",amount:8000,info:""},
{id:"cepic",name:"cepillado corto",amount:16000,info:""},
{id:"cepim",name:"cepillado mediano",amount:20000,info:""},
{id:"cepil",name:"cepillado largo",amount:25000,info:""},
{id:"cepiex",name:"cepillado extralargo",amount:30000,info:""},
{id:"tren",name:"trenzas",amount:10000,info:""},
{id:"coce1",name:"color cepillado corto",amount:32000,info:"Color y Cepillado Corto con aplicación de tintes Sin Producto"},
{id:"coce2",name:"color cepillado mediano",amount:42000,info:"Color y Cepillado Mediano con aplicación de tintes Sin Producto"},
{id:"coce3",name:"color cepillado largo",amount:55000,info:"Color y Cepillado Largo con aplicación de tintes Sin Producto"},
{id:"tin1",name:"producto tinte 1/2",amount:8000,info:"Mitad del Producto"},
{id:"tin2",name:"producto tinte 1",amount:16000,info:"Producto Completo"},
{id:"ati1",name:"aplica tinte corto",amount:16000,info:"Aplicación de tinte cabello corto"},
{id:"ati2",name:"aplica tinte largo",amount:20000,info:"Aplicación de tinte cabello largo"},
{id:"deco",name:"decorado",amount:2000,info:""},
{id:"medpier",name:"Depilacion 1/2 pierna",amount:20000,info:""}]

const entries = [
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1144060519",serviceId:"mapi",manualEntry:"",amountEntry:0},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1144060519",serviceId:"mapi",manualEntry:"",amountEntry:0},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1144060519",serviceId:"mapi",manualEntry:"",amountEntry:0},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1144060519",serviceId:"pies",manualEntry:"",amountEntry:0},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"38684947",serviceId:"mapi",manualEntry:"",amountEntry:0},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"38684947",serviceId:"pies",manualEntry:"",amountEntry:0},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"38684947",serviceId:"pies",manualEntry:"",amountEntry:0},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"38684947",serviceId:"manos",manualEntry:"",amountEntry:0},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"inma",manualEntry:"corte de caballero",amountEntry:12000},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"cortec",manualEntry:"",amountEntry:0},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"inma",manualEntry:"hidratacion",amountEntry:25000},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"inma",manualEntry:"cepillado mas maquillaje",amountEntry:48000},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"cortec",manualEntry:"",amountEntry:0},
{date:"01/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"cortec",manualEntry:"",amountEntry:0},
{date:"02/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1144060519",serviceId:"manos",manualEntry:"",amountEntry:0},
{date:"02/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1144060519",serviceId:"pies",manualEntry:"",amountEntry:0},
{date:"02/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"38684947",serviceId:"inma",manualEntry:"maquillaje de unas",amountEntry:7000},
{date:"02/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"38684947",serviceId:"pies",manualEntry:"",amountEntry:0},
{date:"02/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"38684947",serviceId:"pies",manualEntry:"",amountEntry:0},
{date:"02/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"cortec",manualEntry:"",amountEntry:0},
{date:"02/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"cortec",manualEntry:"",amountEntry:0},
{date:"02/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"cortec",manualEntry:"",amountEntry:0},
{date:"02/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"inma",manualEntry:"dos cortes",amountEntry:25000},
{date:"02/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"cortec",manualEntry:"",amountEntry:0},
{date:"03/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"corted",manualEntry:"",amountEntry:0},
{date:"03/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"cortec",manualEntry:"",amountEntry:0},
{date:"03/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1144060519",serviceId:"manos",manualEntry:"",amountEntry:0},
{date:"03/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"corted",manualEntry:"",amountEntry:0},
{date:"03/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"corted",manualEntry:"",amountEntry:0},
{date:"03/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"cortec",manualEntry:"",amountEntry:0},
{date:"03/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"cepiex",manualEntry:"",amountEntry:0},
{date:"04/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1144060519",serviceId:"inma",manualEntry:"retiro semi y manos",amountEntry:16000},
{date:"04/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1144060519",serviceId:"pies",manualEntry:"",amountEntry:0},
{date:"04/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"38684947",serviceId:"manos",manualEntry:"",amountEntry:0},
{date:"04/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"cortec",manualEntry:"",amountEntry:0},
{date:"04/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"corted",manualEntry:"",amountEntry:0},
{date:"04/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1143961948",serviceId:"corted",manualEntry:"",amountEntry:0},
{date:"04/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"1144060519",serviceId:"pies",manualEntry:"",amountEntry:0},
{date:"04/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"38684947",serviceId:"manos",manualEntry:"",amountEntry:0},
//faltan registros...
//{date:"04/03/2021",entryType:"entry",userPhoneNumber:"3006007050",workerId:"",serviceId:"",manualEntry:"",amountEntry:0},
]

module.exports= {
    loadAll
}
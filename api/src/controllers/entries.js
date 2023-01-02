const { User, Entry, Worker, Service } = require("../db.js");
const { Op, JSON, json } = require("sequelize");
const {exclutionInInclude,exclutionppal,createWhereObj} = require('./constAndFunctions')
const {fechaCompleta} = require('./entries/fecha_completa')

async function getEntriesByDate(req, res){
    const {workerId,phoneNumber,entry,dateIni,dateEnd}=req.query
    const whereObj = {date:{[Op.between]:[dateIni,dateEnd]}}
    let sumaManual=0,sumaServicio=0
    try{
        const entriesBydate = await Entry.findAll(
            {
                where: entry==="meeting" && workerId ? 
                {date:whereObj.date,workerId,entryType:"meeting"} : 
                createWhereObj(workerId,phoneNumber,entry,whereObj),
                attributes:{exclude: exclutionppal},
                include: [
                    {model: User, attributes: exclutionInInclude},
                    {model: Worker, attributes: exclutionInInclude},
                    {model: Service, attributes: exclutionInInclude}
                ]
            }
        )
        let narraobj=[]
        
        for (let i = 0; i < entriesBydate.length; i++) {
            if(entriesBydate[i].amountEntry===0){
                entriesBydate[i].amountEntry=entriesBydate[i].service.amount
                entriesBydate[i].manualEntry="No aplica"
                sumaServicio+=entriesBydate[i].service.amount
            }else{
                sumaManual+=entriesBydate[i].amountEntry
            }

            narraobj.push({
                id:entriesBydate[i].id,
                date:fechaCompleta(entriesBydate[i].date),
                manualEntry:entriesBydate[i].manualEntry,
                amountEntry:entriesBydate[i].amountEntry,
                entryType:entriesBydate[i].entryType,
                user:entriesBydate[i].user,
                worker:entriesBydate[i].worker,
                service:entriesBydate[i].service
            })            
        }
        narraobj.unshift({sumaManual,sumaServicio})
        res.json(narraobj)
    }catch(error){res.send(`Error: ${error}`)}
}

async function createEntry(req, res){
    try{
        creado = await Entry.create(
            {
                date:req.body.date?req.body.date:Date(),
                manualEntry:req.body.manualEntry,
                amountEntry:req.body.amountEntry,
                entryType:req.body.entryType,
                userPhoneNumber:req.body.userPhoneNumber,
                workerId:req.body.workerId,
                serviceId:req.body.serviceId
            }
        )
        res.send(`Entrada Creada Exitosamente`)
    }catch(error){res.send(`Error: ${error}`)}
}

async function updateEntryType(req,res){
    const { date, userPhoneNumber,entryType } = req.body;
    try{
        await Entry.update({entryType},{where:{date,userPhoneNumber}})
        res.send("Se ha actualizado entryType")
    }catch(error){res.send(`Error: ${error}`)}    
}

module.exports= {
    getEntriesByDate,
    createEntry,
    updateEntryType
}
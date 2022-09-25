const { User, Entry, Worker, Service } = require("../db.js");
const { Op } = require("sequelize");
const {exclutionInInclude,exclutionppal,createWhereObj} = require('./constAndFunctions')

async function getEntriesByDate(req, res){
    const {workerId,phoneNumber,entry,dateIni,dateEnd}=req.query
    //const whereObj = {date:{[Op.between]:[new Date(dateIni),new Date(dateEnd)]}}
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
        for (let i = 0; i < entriesBydate.length; i++) {
            if(entriesBydate[i].amountEntry===0){
                entriesBydate[i].amountEntry=entriesBydate[i].service.amount
                entriesBydate[i].manualEntry="No aplica"
                sumaServicio+=entriesBydate[i].service.amount
            }else{
                sumaManual+=entriesBydate[i].amountEntry
            }
        }
        entriesBydate.unshift({sumaManual,sumaServicio})
        res.send(entriesBydate)
    }catch(error){res.send(`Error: ${error}`)}
}

async function createEntry(req, res){
    try{
        await Entry.create(
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
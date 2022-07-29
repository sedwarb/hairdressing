const { User, Entry, Worker, Service } = require("../db.js");
const { Op } = require("sequelize");
const {exclutionInInclude,exclutionppal,createWhereObj} = require('./constAndFunctions')

async function getEntriesByDate(req, res){
    const {workerId,phoneNumber,entry,dateIni,dateEnd}=req.query
    const whereObj = {date:{[Op.between]:[new Date(dateIni),new Date(dateEnd)]}}
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
        res.send(entriesBydate)
    }catch(error){res.send(`Error: id trabajador: ${workerId}, ini: ${dateIni}, fin: ${dateEnd}`)}
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
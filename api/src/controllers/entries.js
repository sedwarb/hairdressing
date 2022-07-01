const { User, Entry, Worker, Service } = require("../db.js");
const { Op } = require("sequelize");

async function getEntriesByDate(req, res){
    const exclutionInInclude = {exclude: ["createdAt","updatedAt"]}
    const exclutionppal = [
        "createdAt",
        "updatedAt",
        "userPhoneNumber",
        "workerId",
        "serviceId"
    ]
    let whereObj = {date:{[Op.between]:[req.query.dateIni,req.query.dateEnd]}}
    const size = [req.query.workerId,req.query.phoneNumber,req.query.entry].filter(p=>p!==undefined).length
    if(size===1){
        if(req.query.workerId) whereObj.workerId=req.query.workerId
        if(req.query.phoneNumber) whereObj.userPhoneNumber=req.query.phoneNumber
        if(req.query.entry) whereObj.entryType=req.query.entry
    }else if(size>1)res.send("Solo debe filtrar por workerId o phoneNumber o entry")
    
    try{
        const entriesBydate = await Entry.findAll(
            {
                where: whereObj,
                attributes:{exclude: exclutionppal},
                include: [
                    {model: User, attributes: exclutionInInclude},
                    {model: Worker, attributes: exclutionInInclude},
                    {model: Service, attributes: exclutionInInclude}
                ]
            }
        )
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

module.exports= {
    getEntriesByDate,
    createEntry
}
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
    if(req.query.workerId) whereObj.workerId=req.query.workerId
    if(req.query.phoneNumber) whereObj.userPhoneNumber=req.query.phoneNumber
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
                date:Date(),
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
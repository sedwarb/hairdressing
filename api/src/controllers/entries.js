const { User, Entry, Worker, Service } = require("../db.js");
const { Op } = require("sequelize");

async function getEntriesByDate(req, res){
    try{
        const entriesBydate = await Entry.findAll(
            {//2021-03-01 year-month-day
                where: { date: { [Op.between]: [req.query.dateIni, req.query.dateEnd] } },
                attributes: [
                    "id",
                    "date",
                    "manualEntry",
                    "amountEntry",
                    "entryType"
                ],
                include: [
                    {model: User, attributes: ["phoneNumber","fullname"]},
                    {model: Worker, attributes: ["id","fullname"]},
                    {model: Service, 
                        attributes: [
                            "id",
                            "name",
                            "amount",
                            "info"
                        ]}
                ]
            }
        )
        //entriesBydate[0].id
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
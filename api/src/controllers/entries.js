const { User, Entry, Worker, Service } = require("../db.js");
const { Op } = require("sequelize");

async function getEntriesByDate(req, res){
    const exclution = ["createdAt","updatedAt"]
    const exclutionppal = [
        "createdAt",
        "updatedAt",
        "userPhoneNumber",
        "workerId",
        "serviceId"
    ]
    if(req.query.workerId){
        try{
        const entriesBydate = await Entry.findAll(
            {//2021-03-01 year-month-day
                where: { 
                    date: { [Op.between]: [req.query.dateIni, req.query.dateEnd] },
                    workerId: req.query.workerId 
                },
                attributes:{exclude: exclutionppal},
                include: [
                    {model: User, attributes: {exclude: exclution}},
                    {model: Worker, attributes: {exclude: exclution}},
                    {model: Service, attributes: {exclude: exclution}}
                ]
            }
        )
        //entriesBydate[0].id
        res.send(entriesBydate)
        }catch(error){res.send(`Error: ${error}`)}
    }else{
        if(req.query.phoneNumber){
            try{
                const entriesBydate = await Entry.findAll(
                    {
                        where: { 
                            date: { [Op.between]: [req.query.dateIni, req.query.dateEnd] },
                            userPhoneNumber:req.query.phoneNumber
                        },
                        attributes:{exclude: exclutionppal},
                        include: [
                            {model: User, attributes: {exclude: exclution}},
                            {model: Worker, attributes: {exclude: exclution}},
                            {model: Service, attributes: {exclude: exclution}}
                        ]
                    }
                )
            res.send(entriesBydate)
            }catch(error){res.send(`Error: ${error}`)}
        }else{
            try{
            const entriesBydate = await Entry.findAll(
                {
                    where: { 
                        date: { [Op.between]: [req.query.dateIni, req.query.dateEnd] },
                    },
                    attributes:{exclude: exclutionppal},
                    include: [
                        {model: User, attributes: {exclude: exclution}},
                        {model: Worker, attributes: {exclude: exclution}},
                        {model: Service, attributes: {exclude: exclution}}
                    ]
                }
            )
            res.send(entriesBydate)
            }catch(error){res.send(`Error: ${error}`)}
        }
        
    }    
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
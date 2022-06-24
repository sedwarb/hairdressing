const { User, Entry, Worker, Service } = require("../db.js");
const { Op } = require("sequelize");

async function entriesByDate(req, res){    
    let entriesBydate = await Entry.findAll(
        {//2021-03-01 year-month-day
            where:{date:{[Op.between]:[req.query.dateIni,req.query.dateEnd]}},
            attributes: [
                "id", 
                "date",
                "manualEntry",
                "amountEntry",
                "entryType"],
            include:[
                {model: User,attributes:[
                    "phoneNumber",
                    "fullname"
                ]},
                {model: Worker,attributes:[
                    "id",
                    "fullname"
                ]},
                {model: Service,attributes:[
                    "id",
                    "name",
                    "amount",
                    "info"
                ]}]
        }
    )
    //entriesBydate[0].id
    res.send(entriesBydate)
}

module.exports= {
    entriesByDate
}
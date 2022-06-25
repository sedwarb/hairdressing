const { User, Entry, Worker, Service } = require("../db.js");
const { Op } = require("sequelize");

async function createService(req, res){
    try{
        await Service.create(
            {
                id:req.body.id,
                name:req.body.name,
                amount:req.body.amount,
                info:req.body.info
            }
        )
        res.send(`Servicio Creado Exitosamente`)
    }catch(error){res.send(`Error: ${error}`)}
}

module.exports= {
    createService
}
const { User, Entry, Worker, Service } = require("../db.js");
const { Op } = require("sequelize");

async function createWorker(req, res){
    try{
        await Worker.create(
            {
                id:req.body.id,
                fullname:req.body.fullname
            }
        )
        res.send(`Trabajador Creado Exitosamente`)
    }catch(error){res.send(`Error: ${error}`)}
}

module.exports= {
    createWorker
}
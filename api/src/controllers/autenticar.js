const { Worker, Autenticar } = require("../db.js");

async function getAutenticacion(req, res){
    //{id:"paola",key:"paola",level:"admin"}
    const {id,key}=req.query
    try{
        res.json(
            await Autenticar.findAll(
                {
                    where:{workerId:id,key},
                    include: [
                        {model: Worker}
                    ]
                }
            )
        )
    }catch(error){res.send(`Error: ${error}`)}
}

async function createAutenticacion(req, res){
    try{
        creado = await Autenticar.create(
            {
                key:req.body.key,
                level:req.body.level,
                workerId:req.body.workerId
            }
        )
        res.send(`Entrada Creada Exitosamente`)
    }catch(error){res.send(`Error: ${error}`)}
}

module.exports= {getAutenticacion, createAutenticacion}
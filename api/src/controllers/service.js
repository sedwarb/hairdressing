const { Service } = require("../db.js")

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

async function updateServicePrice(req,res){
    const { id, amount } = req.body;
    let serviceC
    try{
        serviceC = await Service.findOne({where:{id}})
    }catch(error){console.log(`Error: ${error}`)}
    try{
        await Service.update(
            {
                amount,
                info: serviceC.info ? `${serviceC.info}/${serviceC.amount}(${Date.now()})`:
                `/${serviceC.amount}(${Date.now()})`
            },
            {where:{id}})
        res.send("Se ha actualizado el precio")
    }catch(error){res.send(`Error: ${error}`)}    
}

async function getServices(req, res){
    try{
        const getServices = await Service.findAll()
        res.send(getServices)
    }catch(error){res.send(`Error: ${error}`)}    
}

module.exports= {
    createService,
    getServices,
    updateServicePrice
}
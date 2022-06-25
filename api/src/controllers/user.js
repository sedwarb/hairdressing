const { User, Entry, Worker, Service } = require("../db.js");
const { Op } = require("sequelize");

async function createUser(req, res){
    try{
        await User.create(
            {phoneNumber:req.body.phoneNumber,fullname:req.body.fullname}
        )
        res.send(`Usuario: ${req.body.fullname} Creado Exitosamente`)
    }catch(error){res.send(`Error: ${error}`)}
}

module.exports= {
    createUser
}
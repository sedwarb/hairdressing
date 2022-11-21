const { User, Entry, Worker, Service, Product } = require("../db.js");
const { Op } = require("sequelize");

async function createProduct(req, res){
    try{
        await Product.create(
            {
                linea:req.body.linea,
                marca:req.body.marca,
                tipo:req.body.tipo,
                nombre:req.body.nombre,
                volumen:req.body.volumen,
                existencia:req.body.existencia,
                descripcion:req.body.descripcion,
                unidad:req.body.unidad
            }
        )
        res.send(`Producto Creado Exitosamente`)
    }catch(error){res.send(`Error: ${error}`)}
}

async function getProducts(req, res){
    try{
        res.send(await Product.findAll())
    }catch(error){res.send(`Error: ${error}`)}    
}

module.exports={
    createProduct,
    getProducts
}
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('product', {
    linea:{
        type: DataTypes.STRING
    },
    marca:{
        type: DataTypes.STRING
    },
    tipo:{
        type: DataTypes.STRING
    },
    nombre:{
        type: DataTypes.STRING
    },
    volumen:{
        type: DataTypes.FLOAT,
        defaultValue:0.0
    },
    existencia: {
        type: DataTypes.INTEGER,
        defaultValue:0
    },
    descripcion:{
        type: DataTypes.STRING
    },
    unidad:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT,
        defaultValue:0.0
    }
  });
};
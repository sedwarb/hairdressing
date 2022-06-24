const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('service', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.INTEGER
    },
    info: {
        type: DataTypes.TEXT
    },
  });
};
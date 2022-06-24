const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('worker', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    fullname: {
      type: DataTypes.STRING
    }
  });
};
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('autenticar', {
    key: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.STRING,
      defaultValue:"worker"
    }
  });
};
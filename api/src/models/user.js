const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('user', {
    phoneNumber: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    fullname: {
      type: DataTypes.STRING
    }
  });
};

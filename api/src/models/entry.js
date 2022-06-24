const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('entry', {
    date: {
      type: DataTypes.DATEONLY,
      defaultValue:Date()
    },
    manualEntry: {
        type: DataTypes.STRING
    },
    amountEntry: {
        type: DataTypes.FLOAT,
        defaultValue:0.0
    },
    entryType: {
      type: DataTypes.STRING,
      defaultValue:"entry" //los tipos son entry o meeting
  },
  });
};
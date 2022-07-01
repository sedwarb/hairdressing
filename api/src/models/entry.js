const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('entry', {
    date: {
      type: DataTypes.DATE
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
      defaultValue:"entry" //los tipos son entry, meeting, cancelled
  },
  });
};
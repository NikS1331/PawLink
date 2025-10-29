const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schedules', {
    scheduleID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sitterID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pet_sitters',
        key: 'sitterID'
      }
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'schedules',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "scheduleID" },
        ]
      },
      {
        name: "sitterID",
        using: "BTREE",
        fields: [
          { name: "sitterID" },
        ]
      },
    ]
  });
};

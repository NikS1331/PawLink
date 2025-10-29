const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sitting_requests', {
    requestID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sitterID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pet_sitters',
        key: 'sitterID'
      }
    },
    petID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pets',
        key: 'petID'
      }
    }
  }, {
    sequelize,
    tableName: 'sitting_requests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "requestID" },
        ]
      },
      {
        name: "sitterID",
        using: "BTREE",
        fields: [
          { name: "sitterID" },
        ]
      },
      {
        name: "petID",
        using: "BTREE",
        fields: [
          { name: "petID" },
        ]
      },
    ]
  });
};

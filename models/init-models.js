var DataTypes = require("sequelize").DataTypes;
var _pet_owners = require("./pet_owners");
var _pet_sitters = require("./pet_sitters");
var _pets = require("./pets");
var _schedules = require("./schedules");
var _sitting_requests = require("./sitting_requests");

function initModels(sequelize) {
  var pet_owners = _pet_owners(sequelize, DataTypes);
  var pet_sitters = _pet_sitters(sequelize, DataTypes);
  var pets = _pets(sequelize, DataTypes);
  var schedules = _schedules(sequelize, DataTypes);
  var sitting_requests = _sitting_requests(sequelize, DataTypes);

  pets.belongsTo(pet_owners, { as: "owner", foreignKey: "ownerID"});
  pet_owners.hasMany(pets, { as: "pets", foreignKey: "ownerID"});
  schedules.belongsTo(pet_sitters, { as: "sitter", foreignKey: "sitterID"});
  pet_sitters.hasMany(schedules, { as: "schedules", foreignKey: "sitterID"});
  sitting_requests.belongsTo(pet_sitters, { as: "sitter", foreignKey: "sitterID"});
  pet_sitters.hasMany(sitting_requests, { as: "sitting_requests", foreignKey: "sitterID"});
  sitting_requests.belongsTo(pets, { as: "pet", foreignKey: "petID"});
  pets.hasMany(sitting_requests, { as: "sitting_requests", foreignKey: "petID"});

  return {
    pet_owners,
    pet_sitters,
    pets,
    schedules,
    sitting_requests,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

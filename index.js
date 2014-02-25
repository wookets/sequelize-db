
var Sequelize = require('sequelize');

var dbs = {};

var db = function(tenant) {
  var sequelize = dbs[tenant];
  if (!sequelize) {
    sequelize = new Sequelize(db.tenants[tenant]);
    for (var name in db.models) {
      sequelize[name] = sequelize.import(name, db.models[name]);
    }
    dbs[tenant] = sequelize;
  }
  return db;
}

db.models = {};
db.tenants = {};

module.exports = db;
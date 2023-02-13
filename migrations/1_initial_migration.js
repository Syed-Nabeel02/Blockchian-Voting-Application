//all migration files will be here

//we need this because the blockchain state will change when we deploy to blockchain like a transaction

var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

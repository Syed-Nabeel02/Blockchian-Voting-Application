var Election = artifacts.require("./Election.sol");
//artifact hepls us to interact with the blockchain

module.exports = function (deployer) {
  deployer.deploy(Election);
};

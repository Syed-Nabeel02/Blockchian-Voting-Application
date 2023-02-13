const _deploy_contracts = require("../migrations/2_deploy_contracts");

var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){
    it("it initializes the candidates with the correct values", function () {
      return Election.deployed()
        .then(function (instance) {
          electionInstance = instance;
          return electionInstance.candidates(1);
        })
        .then(function (candidate) {
          assert.equal(candidate[0], 1, "contains the correct id");
          assert.equal(
            candidate[1],
            "candidate 1",
            "contains the correct name"
          );
          assert.equal(candidate[2], 0, "contains the correct votes count");
          return electionInstance.candidates(2);
        })
        .then(function (candidate) {
          assert.equal(candidate[0], 2, "contains the correct id");
          assert.equal(
            candidate[1],
            "candidate 2",
            "contains the correct name"
          );
          assert.equal(candidate[2], 0, "contains the correct votes count");
        });
    });
});
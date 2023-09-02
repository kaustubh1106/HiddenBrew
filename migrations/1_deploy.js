var MyContract = artifacts.require("CoffeePurchase");

module.exports = function (deployer) {
  deployer.deploy(MyContract);
};
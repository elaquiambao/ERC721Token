const WealthAcademy = artifacts.require("WealthAcademy");


module.exports = function (deployer) {
  deployer.deploy(WealthAcademy, "Wealth Academy Token", "WAT");

};
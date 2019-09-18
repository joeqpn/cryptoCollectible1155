var Token = artifacts.require("./GameToken.sol");
var Marketplace = artifacts.require("./Marketplace.sol");

module.exports = (deployer) => deployer
.then( () => deployToken(deployer));
// because marketplace contract has a constructor that checks that the calling contract is not 0
function deployToken(deployer) {
    return deployer.deploy(Marketplace, Token.address);
}
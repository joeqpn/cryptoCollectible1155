//initialize the contract and create the 3 tokens and mint some tokens for each
// also assign them to the token contract address as the owner
var Token = artifacts.require("./GameToken.sol");
var Marketplace = artifacts.require("./Marketplace.sol");

//promise chain
module.exports = (deployer) => deployer
.then( () => createToken1())
.then( () => createToken2())
.then( () => createToken3())
.then( () => mintTokens());

//setup the promise chain here to create each token type.
//from mintable contract. 0 as the initial supply and we don't use the URI so ""
//Each time you call create it uses a counter to one-up the TokenID type

async function createToken1(){
    (await Token.deployed()).create(0, "");
}

//item type ID 2 with zero balance
async function createToken2(){
    (await Token.deployed()).create(0, "");
}

//item type ID 3 with zero balance
async function createToken3(){
    (await Token.deployed()).create(0, "");
}
//mint some tokens for each token type and assign them to the marketplace contract
// to be purchased in the game
// mint requires tokenID, owner address, quantity to mint
function mintTokens() {
    Token.deployed().then(instance => {
        instance.mint(1,[Marketplace.address], [30]);
        instance.mint(2,[Marketplace.address], [20]);
        instance.mint(3,[Marketplace.address], [10]);
    })
}
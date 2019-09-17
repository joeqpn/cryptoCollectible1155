//hold all the web3js
// web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));

//Infura Ropsten - make sure Metamask is connected to ropsten and you have an Ropsten ETH in the active acct.
web3 = new Web3(web3.currentProvider);
// prompt the user to ask if the user wants to enable metamask to interact with the app.
ethereum.enable();

//lets get balances for purchased items when file loads
//getUserItems();

var marketplaceAbi = [
    {
      "inputs": [
        {
          "name": "token",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "buyToken",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_operator",
          "type": "address"
        },
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_id",
          "type": "uint256"
        },
        {
          "name": "_value",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

var tokenAbi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_initialSupply",
          "type": "uint256"
        },
        {
          "name": "_uri",
          "type": "string"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_ids",
          "type": "uint256[]"
        },
        {
          "name": "_values",
          "type": "uint256[]"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeBatchTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owners",
          "type": "address[]"
        },
        {
          "name": "_ids",
          "type": "uint256[]"
        }
      ],
      "name": "balanceOfBatch",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_uri",
          "type": "string"
        },
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "setURI",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "nonce",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "creators",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        },
        {
          "name": "_to",
          "type": "address[]"
        },
        {
          "name": "_quantities",
          "type": "uint256[]"
        }
      ],
      "name": "mint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "ERC1155_RECEIVED",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_id",
          "type": "uint256"
        },
        {
          "name": "_value",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "ERC1155_BATCH_RECEIVED",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_ids",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "name": "_values",
          "type": "uint256[]"
        }
      ],
      "name": "TransferBatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_value",
          "type": "string"
        },
        {
          "indexed": true,
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    }
  ]

  //get the GameToken contract address
  
  //var token = new web3.eth.Contract(tokenAbi, "0xC3D39aaBbfd3242644c8DF29459E36F286505CeA");
  var token = new web3.eth.Contract(tokenAbi, "0xC0EDB50dA347Ed6cCeB2dd3A87f18F8679Cc5dAc");

  //var marketplaceAddress = "0xfc85b2f6BC722bE5128384302fbDB58c602263F3";
  var marketplaceAddress = "0xac5b2BED5d15B75ebadaca8704BC57f9C55f3c52";
  
  var marketplace = new web3.eth.Contract(marketplaceAbi, marketplaceAddress);

  console.log("Contract deployed...0xac5b2BED5d15B75ebadaca8704BC57f9C55f3c52");

  // in the cosole you can look under methods section to see what can be called...
  //console.log(contract);
  // use callback to make program wait for the callback() function to run and passback to caller.
  // callback is another way to make async be sync or for programming to wait until callback finishes.
    function getUserItems(callback){
        web3.eth.getAccounts()
        .then( accountArray => {
            var account = accountArray[0];
            //pass metamask account and tokenID
            var tokenPromise1 = token.methods.balanceOf(account, 1).call();
            var tokenPromise2 = token.methods.balanceOf(account, 2).call();
            var tokenPromise3 = token.methods.balanceOf(account, 3).call();

            Promise.all([tokenPromise1, tokenPromise2, tokenPromise3])
            .then(valuesArray => {
                console.log("FETCHED USER ITEMS!");
                console.log(valuesArray);
                numberOfTalismans = valuesArray[0];
                numberOfBoots = valuesArray[1];
                numberOfCapes = valuesArray[2];

                if(valuesArray[0] > 0)
                COIN_GENERATION_INTERVAL = COIN_GENERATION_INTERVAL_DEFAULT * Math.pow(0.75,numberOfTalismans);
                    console.log("Talisman interval: " + COIN_GENERATION_INTERVAL);
                if(valuesArray[1] > 0)
                PLAYER_SPEED = PLAYER_SPEED_DEFAULT * Math.pow(1.3, numberOfBoots);
                    console.log("Player Speed: " + PLAYER_SPEED);
                if(valuesArray[2] > 0)
                GAME_SECOND = GAME_SECOND_DEFAULT * Math.pow(1.5, numberOfCapes);
                    console.log("Seconds delay: " + GAME_SECOND);

                callback();
            })
        })
    }

    // function to buy pass in tokenID{1,2,3}
    function buy(id){
      //pause the game while making purchases...
      pauseGame = true;
        web3.eth.getAccounts()
        //get the users account from metamask
        .then( accountArray => {

                //var account = accountArray[0];

                //create an options object to pass into buyToken
                // pass in the first account in the array returned by getAccounts
                var options = {
                    from: accountArray[0],
                    value: 0
                }
    
                if (id == 1)
                    options.value = 100000000000000;
                else if(id == 2)
                    options.value = 200000000000000;
                else if(id == 3)
                    options.value = 300000000000000;
    
                
                marketplace.methods.buyToken(id).send(options)
                .on('receipt', receipt => {
                    //alert only needed when using local chain. Metamask will alert you when done.
                    //alert("Transaction Complete");
                    //show the balance of the marketplace contract
                    //TODO: the contract holds the payments for tokens.
                    //TODO: have the contract pay the owner when burn the token. Which should happen at the end of the game.
                    //TODO: essentially you buy just for that game then when you use them...the proceeds go to token creator.
                    //TODO: need to have a couple creators of tokens and then a player that buys from each. 
                    //lets resume play of the game.
                    pauseGame = false;
                    contractBalancePromise = web3.eth.getBalance(marketplaceAddress);
                    Promise.all([contractBalancePromise])
                    .then(valuesArray => {
                        console.log("marketplace contract ETH: " + valuesArray)
                    //now lets get new balances of owned items (1,2,3)
                    getUserItems(function(){
                      console.log("Reloaded User Items");
                      purchasedTalismans.setText("Purchased Talismans: " + numberOfTalismans);
                      purchasedBoots.setText("Purchased Boots:     " + numberOfBoots);
                      purchasedCapes.setText("Purchased Capes:     " + numberOfCapes);
                    });
                    })
                })



            
        })


    }

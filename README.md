
## Prerequisites
Install Node.js and Node Package Manager(npm)
[Node.js](/https://nodejs.org/en/)

Install Truffle 
### `npm install -g truffle`


WINDOWS ONLY: Install Python (or have another webserver installed)
[Python 3.7](https://www.python.org/downloads/windows/)

Download the Github repo to a local project folder
[Github React-Dapp](https://github.com/joeqpn/cryptoCollectible1155)

Now we need to install dependencies described in package.json or npm-shrinkwrap.json package-lock.json into the node_modules folder...
### `cd into filipERC1155/`
### `npm install`
After running the npm install command ensure a node_modules folder now exists in the filipERC1155 directory.

Install Google Chrome MetaMask Extension (Desktop)
[MetaMask Extension](https://mobile.metamask.io)

Install MetaMask Mobile
[MetaMask Mobile](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
NOTE: There should be instructions on how to sync your desktop MetaMask with your Mobile MetaMask...You may want to create several Desktop test accounts prior to syncing with your mobile wallet...
NOTE: Syncing will not bring over imported accounts you will have to add them manually to the mobile wallet. 

Currently the game example connects to Ropsten through Infura. Ensure your metamask network is Ropsten and that you are using an account that has Ropsten ETH.
[Ropsten Faucet](https://faucet.ropsten.be)

Currently the contract is running on Ropsten. As long as you do not intend to change the .sol files or the deployed network all you need to do to run the app is...
Start the Python webserver

### `cd <location of cryptoCollectible1155/code/>`
python -m SimpleHTTPServer 8000
NOTE: LEAVE THIS WINDOW OPEN
To Quite python webserver
### `Ctrl-c`

Open your browser that has metamask installed then browse to your local webserver...
### `http://localhost:8000`

This should launch the app in your browser. 
If there are issues ensure you metamask network is Ropsten and the selected account has Ropsten ETH.

use the keyboard arrow keys to navigate the player.
at anytime you can buy items.
Boost Talisman - Increases the rate that bitcoin fall from the sky...
Super Boots - Increases player speed
Time Warp - Slows down the clock so you can get more bitcoin

To Deploy new .sol contracts or change deployed network
you would need to add a new network to the truffle-config.js and delploy to that network
Then you will need to copy the abi from 
cryptoCollectible1155/filipERC1155/build/contracts/Marketplace.json
and insert it into 
cryptoCollectible1155/code/eth1155.js


Extra notes...
If you want to get Rinkeby ETH
You can get ETH to use on the Rinkeby Testnet by going to a faucet
[Rinkeby Faucet](https://faucet.rinkeby.io/)
NOTE: This can take some time if the network is busy. It should give you a response on the page when your ETH has been funded.
Verify if the ETH has arrived in your address through Metamask
You can also verifiy if the ETH has arrived by pasting your public address to
[Rinkeby Etherscan](https://rinkeby.etherscan.io/)

to migrate contracts to Ropsten or Rinkeby
cd cryptoCollectible1155/filipERC1155
### `truffle migrate --reset --network ropsten`
or
### `1truffle migrate --reset --network rinkeby`






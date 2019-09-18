pragma solidity ^0.5.0;

import "../lib/IERC1155.sol";
// contract to purchase tokens
contract Marketplace {
    IERC1155 private _token;
    //maps a tokenID to a price for the tokenID(ETH for now)
    mapping (uint256 => uint256) price;

    constructor(IERC1155 token) public {
        // must have a valid address...
        require(address(token) != address(0));
        _token = token;
        //price in wei thats 1 Quintillion 1^18 or 1,000,000,000,000,000,000
        price[1] = 100000000000000; // 0.0001 ETH
        price[2] = 200000000000000; // 0.0002 ETH
        price[3] = 300000000000000; // 0.0003 ETH
    }
    //fallback function if someone sends ETH to this contract...We'll give them token 1.
    function () external payable {
        // can only buy one item at a time...
        buyToken(1);
    }

    function buyToken(uint256 tokenId) public payable {
        // get the amount sent
        uint256 weiAmount = msg.value;
        // ensure they sent enough
        require(weiAmount >= price[tokenId] && price[tokenId] != 0);
        // need to check if there are tokens to purchase(we only minted so many of each!).
        // if tokens can't be purchased return message saying so...
        // transfer the token from sender to contract owner...
        _token.safeTransferFrom(address(this), msg.sender, tokenId, 1, "");
    }
    // Can't send tokens to contracts that don't support the ERC1155 standard
    // Check if recipient is a contract. The receiving contract must have this so it can returns a hash which allows the transaction to proceed.
    // This is a stamp of approval
    function onERC1155Received(address _operator, address _from, uint256 _id, uint256 _value, bytes calldata _data) external returns(bytes4) {
        return bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"));
    }
}
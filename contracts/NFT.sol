//SPDX-License-Indentifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "hardhat/console.sol";

contract NFT is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    constructor (address marketplaceAddress) ERC721("Metaverse Tokens", "METT"){
        contractAddress = marketplaceAddress;
    }

    //function for creating a token
    function createToken(string memory tokenURI) public returns(uint){
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        //Internal function to mint a new token
        // Reverts if the given token ID already exists.
        //adress to, uint256 tokenId
        _mint(msg.sender, newItemId);

        //Internal function to set the token URI for a given token.
        //Reverts if the token ID does not exist.

        //uint256 tokenId, string _tokenURI
        _setTokenURI(newItemId,tokenURI);

        //give the marketplace an approval to transact this token between users within different contracts
        setApprovalForAll(contractAddress,true);
        return newItemId;
    }
}

//SPDX-License-Indentifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

//helps prevent reentrant calls to a function.
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTMarket is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;

    address payable owner;
    uint256 listingPrice = 0.025 ether;

    constructor() {
        owner = payable(msg.sender);
    }

    struct MarketItem {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;

    //when a new marketItem is created, the event will be emitted
    event MarketItemCreated(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    //function that returns the listing price
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }


    //function for creating a market item

    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) public payable nonReentrant {
        require(price > 0, "Price must be atleast 1 wei");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        _itemIds.increment();

        //id for the item that is going for sale now
        uint256 itemId = _itemIds.current();

        //setting the mapping for the market item
        idToMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender),
            //passing an empty address to the owner
            payable(address(0)),
            price,
            false
        );

        //transfer the ownership of the nft to the contract itself
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        emit MarketItemCreated(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            address(0),
            price,
            false
        );
    }

    //function for creating a market sale

    function createMarketSale(
        address nftContract,
        uint256 itemId
    ) public payable nonReentrant{
        uint price = idToMarketItem[itemId].price;
        uint tokenId = idToMarketItem[itemId].tokenId;

        require(msg.value== price, "Please submit the asking price in order to complete the purchase");

        //tranfer the money to the seller
        idToMarketItem[itemId].seller.transfer(msg.value);

        //tranfer the ownership of the token from the contract address to the buyer
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);

        //set the local value of the owner = the message sender
        idToMarketItem[itemId].owner = payable(msg.sender);

        //setting the value to be sold
        idToMarketItem[itemId].sold = true;

        _itemsSold.increment();

        //paying the contract owner
        payable(owner).transfer(listingPrice);
    }

}

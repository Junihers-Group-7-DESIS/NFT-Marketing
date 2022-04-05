import { Box } from "@material-ui/core"
import Header from "../components/header.js"
import Collections from "../components/Collections.js"
import Design from "../components/design.js";

import { ethers } from 'ethers'
import { useEffect, useState } from "react";
import axios from 'axios'
import Web3Modal from 'web3modal'

import {
  marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'



const Dashboard = () => {


  const [loadingState, setLoadingState] = useState('not-loaded')
  const [nfts, setNfts] = useState([])
  useEffect(() => {
    loadNFTs()
  }, [])


  async function loadNFTs() {

    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    const data = await contract.fetchItemsListed()
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await contract.tokenURI(i.tokenId)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: tokenUri,
      }
      return item
    }))

    setNfts(items)
    setLoadingState('loaded')
  }

  async function buyNft(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price
    })
    await transaction.wait()
    loadNFTs()
  }

  return (
    <Box>
      <Box sx={{ backgroundColor: '#F7FFFE', margin: '-0.4%' }}>
        <Box sx={{ backgroundColor: '#F7FFFE', margin: '-0.4%', marginRight: '-0.3%', marginBottom: '-2%' }}>
          <Header page={4} />
          <Collections title='Dashboard' nfts={nfts} />
          {!nfts.length && <center><h1>No items listed.</h1></center>}
          <Design />
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard;
import { Box } from '@material-ui/core'
import Header from '../components/header.js'
import Resell from '../components/resell.js'
import Design from '../components/design.js'

import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'


import {
  marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

const MyCollection = () => {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(() => {
    loadNFTs()
  }, [])

  async function loadNFTs() {
        const web3modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    //if the user is connected, then we will have a connection that we can work with
    const connection = await web3modal.connect()

    //creating a provider with the user's addredd/connection
    //we are using Web3Provider here
    const provider = new ethers.providers.Web3Provider(connection)

    //we need the user to sign in to execute an actual transaction
    //thus we are creating a signer

    const signer = provider.getSigner()
    //taking reference to the Market contract
    // const marketContract = new ethers.Contract(
    //   nftmarketaddress,
    //   Market.abi,
    //   signer,
    // )
    const marketplaceContract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
   

    // const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)

    //getting the data
    //getting all the unsold items through calling a function of our contract
    const data = await marketplaceContract.fetchMyNFTs()


    /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await marketplaceContract.tokenURI(i.tokenId)
      const searchParams = new URLSearchParams()
      searchParams.set('fileUrl', tokenUri)
      const meta = await fetch(`/api/data?${searchParams.toString()}`).then(r => r.json())
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: tokenUri,
        name: meta["name"],
        description: meta["description"],
      }
      return item
    }))
    console.log(items)
    setNfts(items)
    setLoadingState('loaded') 
  }

  function listNFT(nft) {
    console.log('nft:', nft)
    router.push(`/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)
  }

  return (
    <Box>
      <Box sx={{ backgroundColor: '#F7FFFE', margin: '-0.4%' }}>
        <Box
          sx={{
            backgroundColor: '#F7FFFE',
            margin: '-0.4%',
            marginRight: '-0.3%',
            marginBottom: '-2%',
          }}
        >
          <Header page={3} />
          <Resell title="My NFT Collections" nfts={nfts}/>
          {!nfts.length && <center><h1>No assets owned.</h1></center>}
          <Design />
        </Box>
      </Box>
    </Box>
  )
}

export default MyCollection

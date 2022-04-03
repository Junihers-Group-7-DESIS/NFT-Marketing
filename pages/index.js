import { Box } from '@material-ui/core'
import Header from '../components/header.js'
import Collections from '../components/Collections.js'
import Info from '../components/Info.js'
import Design from '../components/design.js'

import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import Web3Modal from 'web3modal'

import {
  marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

export default function Index() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider()
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider)
    const data = await contract.fetchMarketItems()

    /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await contract.tokenURI(i.tokenId)
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
  // async function buyNft(nft) {
  //   /* needs the user to sign the transaction, so will use Web3Provider and sign it */
  //   const web3Modal = new Web3Modal()
  //   const connection = await web3Modal.connect()
  //   const provider = new ethers.providers.Web3Provider(connection)
  //   const signer = provider.getSigner()
  //   const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)

  //   /* user will be prompted to pay the asking proces to complete the transaction */
  //   const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')   
  //   const transaction = await contract.createMarketSale(nft.tokenId, {
  //     value: price
  //   })
  //   await transaction.wait()
  //   loadNFTs()
  // }

  return (
    <Box>
      <Box sx={{ backgroundColor: '#F7FFFE', margin: '-0.4%' }}>
        <Box
          sx={{
            backgroundColor: '#F7FFFE',
            margin: '-0.4%',
            marginRight: '-0.1%',
            marginBottom: '-2%',
          }}
        >
          <Header page={1} />
          {nfts.length != 0 && (
            <Collections title="NFT Collections" nfts={nfts} />
          )}
          {!nfts.length && <center><h1>No Items present</h1></center>}
          <Info title="random" />
          <Design />
        </Box>
      </Box>
    </Box>
  )
}

// export default Index

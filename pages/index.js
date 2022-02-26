import { Box } from '@material-ui/core'
import Header from '../components/header.js'
import Collections from '../components/Collections.js'
import Info from '../components/Info.js'
import Design from '../components/design.js'

import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'

import { nftaddress, nftmarketaddress,rpc_url } from '../config.js'

//importing abis
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

const Index = () => {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  //we want to load all the NFTs when the screen is loaded
  useEffect(() => {
    loadNFTs()
  }, [])

  //function for loading the NFTs
  async function loadNFTs() {
    //setting up a provider
    //using a generic JsonRpcProvider
    const provider = new ethers.providers.JsonRpcProvider(rpc_url)
    //taking reference to the NFT contract
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    //taking reference to the Market contract
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider,
    )

    //getting the data
    //getting all the unsold items through calling a function of our contract
    const data = await marketContract.fetchMarketItems()

    //mapping over all the items
    const items = await Promise.all(
      data.map(async (i) => {
        //calling the tokenContract and getting the tokenUri

        const tokenUri = await tokenContract.tokenUri(i.tokenId)

        //in ipfs, we will be storing our token in json format, with their names, descriptions, etc
        //Let's get that data:
        const meta = await axios.get(tokenUri)
        //creating a value price, and formatting it to a desirable format
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')

        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        }

        return item
      }),
    )

    setNfts(items)
    setLoadingState('loaded')
  }

  async function buyNft(nft) {
    //this will look for a instance of ethereum injected into the browser
    const web3modal = new Web3Modal()
    //if the user is connected, then we will have a connection that we can work with
    const connection = await web3modal.connect()

    //creating a provider with the user's addredd/connection
    //we are using Web3Provider here
    const provider = new ethers.providers.Web3Provider(connection)

    //we need the user to sign in to execute an actual transaction
    //thus we are creating a signer

    const signer = provider.getSigner()
    //instead of passing in the provider as in the previous func, we are passing
    //in the signer here as the third argument
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    //getting a reference to the price
    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')

    //to create a market sale, we will call a function from our contract
    const transation = await contract.createMarketSale(
      nftaddress,
      nft.tokenId,
      {
        value: price,
      },
    )
    //waiting till the transaction is executed
    await transation.wait()

    //after the transaction is complete, we wanna reload the nfts
    loadNFTs()
  }

  if (loadingState === 'loaded' && !nfts.length)
    return <h1>NO items in marketplace!</h1>

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
          <Collections title="NFT Collections" />
          <Info title="random" />
          <Design />
        </Box>
      </Box>
    </Box>
  )
}

export default Index
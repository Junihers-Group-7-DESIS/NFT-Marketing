import {Box} from "@material-ui/core"
import Header from "../components/header.js"
import Collections from "../components/Collections.js"
import Design from "../components/design.js";

import {ethers} from 'ethers'
import { useEffect, useState } from "react";
import axios from 'axios'
import Web3Modal from 'web3modal'

import { nftaddress, nftmarketaddress } from "../config.js";

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'



const Dashboard = () => {

  //creating two arrays
  const [nfts,setNfts] = useState([])
  const [sold, setSold] = useState([])

  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(()=>{
    loadNFTs()
  },[])


  async function loadNFTs(){
    const web3Modal = new Web3Modal()
    const connection = web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()


    const marketContract = new ethers.Contract(nftmarketaddress,Market.abi,signer)
    const tokenContract = new ethers.Contract(nftaddress,NFT.abi,provider)
    const data = await marketContract.fetchItemsCreated()

    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenUri(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId : i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        sold: i.sold,
        image : meta.data.image,
      }
      return item
    }))

    const soldItems = items.filter(i => i.sold)

    setSold(soldItems)
    setNfts(items)
    setLoadingState('loaded')
  }

  return(
    <Box>
      <Box sx={{ backgroundColor:'#F7FFFE', margin:'-0.4%'}}>
        <Box sx={{ backgroundColor:'#F7FFFE', margin:'-0.4%', marginRight:'-0.3%', marginBottom:'-2%'}}>
            <Header page={4}/>
            <Collections title='Dashboard' />
        <Design/>
        </Box>
      </Box>
    </Box>
)}
  
export default Dashboard;
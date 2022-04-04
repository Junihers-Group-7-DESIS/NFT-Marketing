// import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import uploadImage from '../logo/Group 4.png'
import Button from '@mui/material/Button';

import Web3Modal from 'web3modal'

import { useState } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'


import { marketplaceAddress } from '../config.js'

// import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
// import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

export default function FormResells() {
    const [formInput, updateFormInput] = useState({ price: '', image: '' })
    const router = useRouter()
    const { id, tokenURI } = router.query
    const { image, price } = formInput
  
    useEffect(() => {
      fetchNFT()
    }, [id])
  
    async function fetchNFT() {
      if (!tokenURI) return
      updateFormInput(state => ({ ...state, image: tokenURI }))
    }
  
    async function listNFTForSale() {
      if (!price) return
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
  
      const priceFormatted = ethers.utils.parseUnits(formInput.price, 'ether')
      let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
      let listingPrice = await contract.getListingPrice()
  
      listingPrice = listingPrice.toString()
      let transaction = await contract.resellToken(id, priceFormatted, { value: listingPrice })
      await transaction.wait()
     
      router.push('/')
    }

    return(
        <Box sx={{display:'flex', justifyContent:'space-around', margin:'4%'}}>
        <Box sx={{backgroundColor:'#F7FFFE', borderRadius:'20px', display:'flex'}}>
            <Box sx={{display:'flex', flexDirection:'column', margin:'2%', width:'400px'}}>
                <TextField
                    id="outlined-textarea"
                    label="Asset Price in Ether"
                    placeholder=""
                    variant="standard"
                    sx={{margin:'1%'}}
                    onChange={(e) => updateFormInput({ ...formInput, price: e.target.value })}
                />
                <Button  
                    sx={{marginTop:'10%', backgroundColor:'#90E0EF'}}
                    variant="contained"
                    onClick={listNFTForSale}>
                        Resell Digital Asset
                </Button>
            </Box>
        </Box>
        </Box>
  )}
  
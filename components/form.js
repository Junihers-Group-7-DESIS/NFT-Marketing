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

export default function CreateItem() {
    const router = useRouter()
    const [fileUrl, setFileUrl] = useState(null)
    const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })

    async function onChange(e) {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'nftuploads')
      try {
        const data = await fetch('https://api.cloudinary.com/v1_1/de4s3o3gr/image/upload', {
          method: 'POST',
          body: formData
        }).then(r => r.json())
        setFileUrl(data.secure_url)
      } catch (error) {
        console.log('Error uploading file: ', error)
      }
    }
  
    async function listNFTForSale() {
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      var { name, description, price} = formInput
      if (!name || !description || !price || !fileUrl) return
  
      price = ethers.utils.parseUnits(price, 'ether')
  
      var postData = {
        "name":name,
        "description":description,
        "fileUrl":fileUrl,
        "price":price
      }
      console.log(JSON.stringify(postData))
      let data = await fetch('/api/data', {
        method: 'POST',
        body: JSON.stringify(postData)
      }).then(r => r.json())
    
      if (data._id) {
        console.log('Persisted to db')
      } else {
        throw new Error("Cannot insert in to DB")
      }
  
      /* next, create the item in the blockchain */
      let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
      let listingPrice = await contract.getListingPrice()
      listingPrice = listingPrice.toString()
      let transaction = await contract.createToken(fileUrl, price, { value: listingPrice })
      let token = await transaction.wait()
      console.log(token)
      postData = {
        "id":data._id,
        "transactionHash":token.transactionHash,
        "is_update":true
      }
      data = await fetch('/api/data', {
        method: 'POST',
        body: JSON.stringify(postData)
      }).then(r => r.json())
      if (!data.modifiedCount){
        console.log("Unable to update TokenId")
      }
      router.push('/')
    }

    return(
        <Box sx={{display:'flex', justifyContent:'space-around', margin:'4%'}}>
        <Box sx={{backgroundColor:'#F7FFFE', borderRadius:'20px', display:'flex'}}>
            <Box sx={{display:'flex', flexDirection:'column', margin:'2%', width:'400px'}}>
                <TextField
                    id="outlined-textarea"
                    label="Asset Name"
                    placeholder=""
                    variant="standard"
                    sx={{margin:'1%'}}
                    onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
                />
                <TextField
                    id="outlined-textarea"
                    label="Asset Description"
                    placeholder=""
                    variant="standard"
                    multiline
                    sx={{margin:'1%'}}
                    rows={5}
                    onChange={(e) => updateFormInput({ ...formInput, description: e.target.value })}
                />
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
                        Create Digital Asset
                </Button>
            </Box>
            <Box>
                <input
                    type="file"
                    name="asset"
                    onChange={onChange}
                />
                {
                    !fileUrl && (
                        <Image 
                            src={uploadImage} 
                            width='450' 
                            height='400'
                            onChange={onChange}
                        ></Image>
                    )
                }
                {
                    fileUrl && (
                        <img className="rounded mt-4" style={{borderRadius:'20px'}} width="450" height="400" src={fileUrl} />
                    )
                }
               { /*<Image 
                    src={uploadImage} 
                    width='450' 
                    height='400'
                    onChange={onChange}
            ></Image>*/ }
            </Box>
        </Box>
        </Box>
  )}
  
// export default Form;
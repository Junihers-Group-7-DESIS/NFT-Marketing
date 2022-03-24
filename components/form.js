import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import uploadImage from '../logo/Group 4.png'
import Button from '@mui/material/Button';
import Web3Modal from 'web3modal'

import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import { nftaddress, nftmarketaddress } from '../config.js'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

const Form = (props) => {
    
    //ipfs file that we will allow the user to upload
    const [fileUrl, setFileUrl] = useState(null)
    //allow the user to set the properties of the nft
    const [formInput, setFormInput] = useState({price : '', name: '', description: ''})

    const router = useRouter();

    //function for creating and updating the fileUrl

    async function onChange(e){
        //the event e will target the files array
        //taking the first item out of the array
        const file = e.target.files[0]

        try{
            //uploading the file to ipfs
            const added = await client.add(
                //passing in the file
                file,
                {
                    //logging the progress of the file
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            )

            //the file will be located at the following url
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileUrl(url)

        }catch(e){
            console.log(e);
        }
    }

    async function createItem(){
        const {name, description, price} = formInput;
        if(!name || !description || !price) return
      
        //converting into JSON format
        const data = JSON.stringify(
          {name, description, image: fileUrl}
        )
      
        try{
          const added = await client.add(data)
          const url = `https://ipfs.infura.io/ipfs/${added.path}`
      
          //after the file is uploaded on ipfs, pass the url to save it on polygon
          createMktItem(url)
        }catch(e){
          console.log('Error uploading file: e', e);
        }
    }

    async function createMktItem(url){
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
    
        const price = ethers.utils.parseUnits(formInput.price, 'ether')
        //move the reference of the contract from the nft contract to the market contract
        contract = new ethers.Contract(nftmarketaddress,Market.abi,signer)
  
        let listingPrice = await contract.getListingPrice()
        listingPrice = listingPrice.toString()
        transaction = await contract.createToken(url, price, { value: listingPrice })
  
        transaction.wait()
  
        //reroute the user back to the main page
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
                    onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
                />
                <TextField
                    id="outlined-textarea"
                    label="Asset Description"
                    placeholder=""
                    variant="standard"
                    multiline
                    sx={{margin:'1%'}}
                    rows={5}
                    onChange={(e) => setFormInput({ ...formInput, description: e.target.value })}
                />
                <TextField
                    id="outlined-textarea"
                    label="Asset Price in Ether"
                    placeholder=""
                    variant="standard"
                    sx={{margin:'1%'}}
                    onChange={(e) => setFormInput({ ...formInput, price: e.target.value })}
                />
                <Button  
                    sx={{marginTop:'10%', backgroundColor:'#90E0EF'}}
                    variant="contained"
                    onClick={createItem}>
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
               {/* <Image 
                    src={uploadImage} 
                    width='450' 
                    height='400'
                    onChange={onChange}
                ></Image> */}
            </Box>
        </Box>
        </Box>
  )}
  
export default Form;
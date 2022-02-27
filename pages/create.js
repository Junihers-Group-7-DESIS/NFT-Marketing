import { Box } from '@material-ui/core'
import Header from '../components/header.js'
import Form from '../components/form.js'

import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

// const client = ipfsHttpClient('https://ipfs.infura.io:5000/api/v0')

import { nftaddress, nftmarketaddress } from '../config.js'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import { use } from 'chai'

const Create = () => {
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
        createSale(url)
    
      }catch(e){
        console.log('Error uploading file: e', e);
      }
    }

    async function createSale(){
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()


      let contract = new ethers.Contract(nftaddress,NFT.abi,signer)
      let transaction = await contract.createToken(url)

      let tx = await transaction.wait()

      let event = tx.events[0]
      let value = event.args[2]
      let tokenId = value.toNumber()


      const price = ethers.utils.parseUnits(formInput.price, 'ether')

      //move the reference of the contract from the nft contract to the market contract
      contract = new ethers.Contract(nftmarketaddress,Market.abi,signer)

      let listingPrice = await contract.getListingPrice()
      listingPrice = listingPrice.toString()

      transaction = await contract.createMarketItem(nftaddress,tokenId,price, {value: listingPrice})

      transaction.wait()

      //reroute the user back to the main page
      router.push('/')
      

    }

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          margin: '-0.4%',
          marginRight: '-0.3%',
        }}
      >
        <Header page={2} />
        <Form />
      </Box>
    </Box>
  )
}

//allow users to create and save items in ipfs

export default Create

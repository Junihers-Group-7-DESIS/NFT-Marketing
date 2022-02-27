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

export default Create

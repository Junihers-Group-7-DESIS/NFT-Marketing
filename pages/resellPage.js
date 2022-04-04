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
import Header from '../components/header.js'
import FormResells from '../components/formResell.js'

const ResellPage = () => {

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
        <FormResells />
      </Box>
    </Box>
  )
}


export default ResellPage

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import Image from 'next/image'

import { useEffect, useState } from 'react'
import axios from 'axios'
import {ethers} from 'ethers'
import Web3Modal from 'web3modal'
import { useRouter } from 'next/router'

// import { nftaddress, nftmarketaddress } from "../config.js";
import {
  marketplaceAddress
} from '../config'
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

// import Dashboard from '../pages/dashboard.js'

export default resellNFTs = (props) => {

    const lazyRoot = React.useRef(null)

    return (
        <Grid item xs={12} sm={4} md={3} key={props.index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Card sx={{ maxWidth: 1500, borderRadius: '15px' }}>
                    <CardActionArea>
                        <Image lazyRoot={lazyRoot} src={props.img} width="800px" height="500px" />
                    </CardActionArea>
                </Card>
                <Card>
                        <CardActionArea>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: 240, borderRadius: '15px', backgroundColor: '#90E0EF', marginTop: '4%' }}>
                        
                            <Image lazyRoot={lazyRoot} src={ethericon} width="35" height="40" />
                            <a
                            onClick={(e) => formResells(props)}>
                                    <Typography variant="subtitle1" >
                            {props.cost} &nbsp; Ethers
                        </Typography>
                            </a>
                        
                    </Box>
                    </CardActionArea>
                        </Card>
            </Box>
        </Grid>
    )
}

// export default resellNFTs;
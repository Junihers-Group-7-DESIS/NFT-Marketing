import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import ethericon from "../logo/Rectangle 7.svg";
import Image from 'next/image'

import {ethers} from 'ethers'
import Web3Modal from 'web3modal'

// import { nftaddress, nftmarketaddress } from "../config.js";
import {
  marketplaceAddress
} from '../config'
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

// import Dashboard from '../pages/dashboard.js'

async function buyNft(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')   
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price
    })
    await transaction.wait()
    loadNFTs()
  }

const ItemDetails = (props) => {

    const lazyRoot = React.useRef(null)

    return (
        <Grid item xs={12} sm={4} md={3} key={props.index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Card sx={{ maxWidth: 1500, borderRadius: '15px' }}>
                    <CardActionArea>
                        <Image lazyRoot={lazyRoot} src={props.img} width="800px" height="500px" />
                        {/* <CardContent>
                            <h3>
                                {props.price}
                            </h3>
                            { <Typography sx={{textAlign:'center', fontWeight:'600'}} gutterBottom variant="h5" component="div">
                                {props.name}
                            </Typography> }
                            <Box sx={{display:'flex', justifyContent:'center'}}>
                                <Typography sx={{color:'#000000'}} gutterBottom variant='caption' component="div">
                                    {props.description} &nbsp;
                                </Typography>
                                { <Typography sx={{color:'#0095D6'}} gutterBottom variant='caption' component="div">
                                    {props.description}
                                </Typography> }
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                {props.description}
                            </Typography>
                        </CardContent> */}
                    </CardActionArea>
                </Card>
                <Card>
                        <CardActionArea>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: 240, borderRadius: '15px', backgroundColor: '#90E0EF', marginTop: '4%' }}>
                        
                            <Image lazyRoot={lazyRoot} src={ethericon} width="35" height="40" />
                            <a
                            onClick={(e) => buyNft()}>
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

export default ItemDetails;
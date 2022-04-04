import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemDetails from './ItemDetail';
import { Grid } from '@mui/material';
import sampleImg from "../logo/sampleImg.png"

const Collections = (props) => {
    console.log(props.nfts)
    return(
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', margin:'1%', backgroundColor:'transparent'}} >
            <Typography variant="h4">
                {props.title}
            </Typography>
            <Box sx={{marginTop:'2%'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                   
                    {props.nfts.map((nft,i) => (
                        <ItemDetails
                        img={nft.image}
                        name={nft.name}
                        // creator={nft.seller}
                        tokenId = {nft.tokenId}
                        description={nft.description}
                        cost={nft.price}
                    />
                    ))}
                   
                </Grid>
            </Box>
        </Box>
  )}
  
export default Collections;
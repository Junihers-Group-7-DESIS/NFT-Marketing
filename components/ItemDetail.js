import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import ethericon from "../logo/Rectangle 7.svg";
import Image from 'next/image'

const ItemDetails = (props) => {

    const lazyRoot = React.useRef(null)

    return(
        <Grid item xs={12} sm={4} md={3} key={props.index}>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                <Card sx={{ maxWidth: 250, borderRadius:'15px' }}>
                    <CardActionArea>
                        <Image lazyRoot={lazyRoot} src={props.img} width="300px" height="300px" />
                        <CardContent>
                            <Typography sx={{textAlign:'center', fontWeight:'600'}} gutterBottom variant="h5" component="div">
                                {props.name}
                            </Typography>
                            <Box sx={{display:'flex', justifyContent:'center'}}>
                                <Typography sx={{color:'#888888'}} gutterBottom variant='caption' component="div">
                                    by &nbsp;
                                </Typography>
                                <Typography sx={{color:'#0095D6'}} gutterBottom variant='caption' component="div">
                                    {props.creator}
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                {props.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-around', width:240, borderRadius:'15px', backgroundColor:'#90E0EF', marginTop:'4%'}}>
                    <Typography variant="subtitle1" >
                        {props.cost} &nbsp; Ethers
                    </Typography>
                    <Image lazyRoot={lazyRoot} src={ethericon} width="35" height="40"/>
                </Box>
            </Box>
            
        </Grid>
  )}
  
export default ItemDetails;
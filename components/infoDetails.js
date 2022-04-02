import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import walletIcon from "../logo/icon 1.svg";
import Image from 'next/image'

const InfoDetails = (props) => {

    const lazyRoot = React.useRef(null)

    return(
        <Card sx={{display:'flex',flexDirection:'column',alignContent:'center', maxWidth: 200, borderRadius:'15px', marginTop:'5%', paddingTop:'1%' }}>
            <Image lazyRoot={lazyRoot} src={walletIcon} width='30' height='30' />
            <CardActionArea>
                <CardContent>
                    <Typography sx={{textAlign:'center', fontWeight:'600'}} gutterBottom variant="h6" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
)}
  
export default InfoDetails;
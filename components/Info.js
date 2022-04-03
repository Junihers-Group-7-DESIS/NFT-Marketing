import React from 'react';
import Box from '@mui/material/Box';
import InfoDetails from './infoDetails';

const Info = (props) => {

    return(
        <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'space-evenly', alignItems:'center', marginTop:'5%',paddingBottom:'5%', backgroundColor:'#FFFFFF'}} >
            <InfoDetails 
                title='Sell your assets'
                desc='You can sell your assets by creating their unique tokens'
            />
            <InfoDetails 
                title='View your collections'
                desc='Check out your personalized collections in the My Collections page'
            />
            <InfoDetails 
                title='Dashboard'
                desc='Every token properly categorised here for your ease'
            />
        </Box>
  )}
  
export default Info;
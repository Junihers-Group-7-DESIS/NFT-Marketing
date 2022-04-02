import React from 'react';
import Box from '@mui/material/Box';
import InfoDetails from './infoDetails';

const Info = (props) => {

    return(
        <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'space-evenly', alignItems:'center', marginTop:'5%',paddingBottom:'5%', backgroundColor:'#FFFFFF'}} >
            <InfoDetails 
                title='Heading1'
                desc='fhhxwei xfwenfxoqiwex dhqwno  d3nm oqwmd3xrmd iwsmje'
            />
            <InfoDetails 
                title='Heading2'
                desc='fhhxwei xfwenfxoqiwex dhqwno  d3nm oqwmd3xrmd iwsmje'
            />
            <InfoDetails 
                title='Heading3'
                desc='fhhxwei xfwenfxoqiwex dhqwno  d3nm oqwmd3xrmd iwsmje'
            />
        </Box>
  )}
  
export default Info;
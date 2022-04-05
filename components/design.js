import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image'
import designImage from '../logo/Group 5.svg'

const Design = () => {

    return (
        <Box sx={{ margin: '-0.3%', marginBottom: '-1%' }}>
            <Image src={designImage} width='1600' height='683'></Image>
        </Box>
    )
}

export default Design;
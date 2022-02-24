import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import uploadImage from '../logo/Group 4.png'
import Button from '@mui/material/Button';

const Form = (props) => {
    
    return(
        <Box sx={{display:'flex', justifyContent:'space-around', margin:'4%'}}>
        <Box sx={{backgroundColor:'#F7FFFE', borderRadius:'20px', display:'flex'}}>
            <Box sx={{display:'flex', flexDirection:'column', margin:'2%', width:'400px'}}>
                <TextField
                    id="outlined-textarea"
                    label="Asset Name"
                    placeholder=""
                    variant="standard"
                    sx={{margin:'1%'}}
                />
                <TextField
                    id="outlined-textarea"
                    label="Asset Description"
                    placeholder=""
                    variant="standard"
                    multiline
                    sx={{margin:'1%'}}
                    rows={5}
                />
                <TextField
                    id="outlined-textarea"
                    label="Asset Price in Ether"
                    placeholder=""
                    variant="standard"
                    sx={{margin:'1%'}}
                />
                <Button sx={{marginTop:'10%', backgroundColor:'#90E0EF'}}variant="contained">Create Digital Asset</Button>
            </Box>
            <Box>
               <Image src={uploadImage} width='450' height='400'></Image>
            </Box>
        </Box>
        </Box>
  )}
  
export default Form;
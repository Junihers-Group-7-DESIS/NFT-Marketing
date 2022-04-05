import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
import logo from "../logo/Group 3.svg"
import Image from 'next/image'
import StyledTabs from '../styledComponents/StyledTabs';
import StyledTab from '../styledComponents/Styledtab';
import { isMobile } from 'react-device-detect'
import { useRouter } from 'next/router'

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Header = (props) => {

    const router = useRouter()
    const lazyRoot = React.useRef(null)
    const [value, setValue] = React.useState(props.page - 1);

    const handleChange = (event, newValue) => {
        if (newValue == 0) {
            router.push('/')
            return
        }
        if (newValue == 1) {
            router.push('/create')
            return
        }
        if (newValue == 2) {
            router.push('/myCollection')
            return
        }
        if (newValue == 3) {
            router.push('/dashboard')
            return
        }
        setValue(newValue);
    };

    return (
        <Box sx={{ borderRadius: '10px', backgroundColor: '#272343', display: 'flex', justifyContent: 'space-between', paddingLeft: '1%', margin: '0%', marginRight: '0%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '15%', minWidth: '120px' }}>
                <Image lazyRoot={lazyRoot} src={logo} width="35" height="40" />
                <Typography sx={{ marginLeft: '5%', color: '#FFFFFF' }}>Marketplace</Typography>
            </Box>
            {!isMobile && (
                <Box sx={{ paddingBottom: '0.5%' }}>
                    <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <StyledTab label="Home" {...a11yProps(0)} />
                        <StyledTab label="Sell Asset" {...a11yProps(1)} />
                        <StyledTab label="My Collection" {...a11yProps(2)} />
                        <StyledTab label="Dashboard" {...a11yProps(2)} />
                    </StyledTabs>
                </Box>
            )}

        </Box>
    )
}

export default Header;
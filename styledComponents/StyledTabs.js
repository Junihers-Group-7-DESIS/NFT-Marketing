import Tabs from '@mui/material/Tabs';
import React from 'react';
import { styled } from '@mui/material/styles';

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
    ))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 100,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
});

export default StyledTabs;
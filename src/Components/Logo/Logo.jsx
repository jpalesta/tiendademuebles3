import React from 'react'
import { Link } from 'react-router-dom';

import ChairIcon from '@mui/icons-material/Chair';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

const Logo = () => {
    return (
        <IconButton aria-label="ChairIcon">
            <ChairIcon color="secondary" />
            <Typography variant="h6" color="secondary">TDM</Typography>
        </IconButton>
    )
}

export default Logo
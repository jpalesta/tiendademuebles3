import React from 'react'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const ChartCart = () => {
    return (
        <IconButton aria-label="show 17 new notifications" color="secondary">
            <Badge badgeContent={17} color="error">
                <ShoppingCartIcon fontSize='large' />
            </Badge>
        </IconButton>
    )
}

export default ChartCart
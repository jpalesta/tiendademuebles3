import React from 'react'
import { Link } from 'react-router-dom'


import { Button, Menu, Toolbar, AppBar, MenuItem } from '@mui/material'

import Logo from '../Logo/Logo'
import ChartCart from '../ChartCart/ChartCart'
import { menues, categorias } from '../../Mock'

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#ffa726"
};

const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Link to={'/'} style={linkStyle}>
                        <Logo />
                    </Link>
                    {menues.map(menu => {
                        return <Button key={menu.id} variant="text" color="secondary" >
                            <Link to={menu.href} style={linkStyle} >
                                <MenuItem>
                                    {menu.name}
                                </MenuItem>
                            </Link>
                        </Button>
                    })}
                    <Button
                        color="secondary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Productos
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {categorias.map(categoria => {
                            return <Button key={categoria.id} variant="text" color="secondary" >
                                <Link to={`/categoria/${categoria.id}`} style={linkStyle} >
                                    <MenuItem onClick={handleClose} >
                                        {categoria.name}
                                    </MenuItem>
                                </Link>
                            </Button>
                        })}
                    </Menu>
                    <ChartCart />
                </Toolbar>
            </AppBar>
            <Toolbar variant='regular' />
        </React.Fragment>
    )
}

export default NavBar
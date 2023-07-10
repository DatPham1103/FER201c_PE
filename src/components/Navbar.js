import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar style={{ backgroundColor: 'orange' }}>
                <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>
                    Staff Management
                </Typography>
                <Button color='inherit' component={Link} to="/">Home</Button>
                <Button color='inherit' component={Link} to="/dashboard">Dashboard</Button>
                <Button color='inherit' component={Link} to="/contact">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
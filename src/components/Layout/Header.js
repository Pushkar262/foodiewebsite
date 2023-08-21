import React from 'react'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { AppBar, Box, Typography, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import './Style/HeaderStyle.css'


const Header = () => {
    return (
        <Box >
            <AppBar componant={"nav"} sx={{ bgcolor: "red" }} >

                <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} sx={{ pl: 10, pr: 10 }}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <RestaurantIcon sx={{ color: "yellow" }} />
                        <Typography
                            color={'yellow'}
                            variant='h4'
                        >Foodie</Typography>
                    </Stack>

                    <Stack direction='row' spacing={3} className='links'>
                        <Link to={"/"}>home</Link>
                        <Link to={"/menu"}>Menu</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </Stack>
                </Stack>
            </AppBar>
        </Box>
    )
}

export default Header



import { AppBar, Avatar, Badge, Box, Link, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddLinkIcon from '@mui/icons-material/AddLink';
import './Navigation.css';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 3,
        top: 37,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 1px',
    },
}));

const Navigation = () => {
    return (
        <Box>
            <AppBar position="static" sx={{ boxShadow: '0', bgcolor: '#eceff1', alignItems: 'flex-end', py: 4 }}>
                <Toolbar>
                    <Stack direction="row" spacing={2}>
                        <Avatar sx={{ bgcolor: "#424242" }} variant="square">
                            <Link href="#" underline="none"> <StyledBadge variant="dot" badgeContent='' color="secondary">
                                <AddLinkIcon sx={{ fontSize: '2.5rem', color: "#fff" }} className="addlinkicon-s"></AddLinkIcon>
                            </StyledBadge></Link>
                        </Avatar>

                        <Avatar sx={{ bgcolor: "#424242" }} variant="rounded">
                            <Link href="#" underline="none"><GitHubIcon sx={{ color: "#fff" }}></GitHubIcon></Link>
                        </Avatar>
                    </Stack>
                </Toolbar>
            </AppBar>
            {/* TEST MODE Fixed */}
            <Box className="corner-ribbon"
                sx={{ p: 2.5, bgcolor: '#e43', color: '#f0f0f0' }}
            >
                <b>TEST MODE</b>
            </Box>
        </Box >
    );
};

export default Navigation;
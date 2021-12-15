import { AppBar, Avatar, Badge, Box, Link, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    // '& .MuiBadge-badge': {
    //     right: -4,
    //     top: 29,
    //     border: `2px solid ${theme.palette.background.paper}`,
    //     padding: '0 1px',
    //     color: 'red',
    // },

    '& .MuiBadge-badge': {
        backgroundColor: '#4caf50',
        color: '#4caf50',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },


}));
const useStyles = makeStyles({
    addLinkIconRotate: {
        color: '#fff',
        transform: 'rotate(-50deg)',
        fontSize: '35px'
    },
    cornerRibbon: {
        position: 'fixed',
        top: '22px',
        left: '-114px',
        width: '300px',
        transform: 'rotate(-44deg)',
        backgroundColor: '#e43',
        color: '#f0f0f0'
    },
});


const Navigation = () => {
    const classes = useStyles();
    return (
        <Box>
            <AppBar position="static" sx={{ boxShadow: '0', bgcolor: '#eceff1', alignItems: 'flex-end', py: 3 }}>
                <Toolbar>
                    <Stack direction="row" spacing={1.5}>

                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar
                                variant="rounded"
                                sx={{ bgcolor: 'grey.800', }}
                            >
                                <AddLinkIcon
                                    style={{ transform: 'rotate(-50deg)' }}
                                    sx={{ color: 'common.white', fontWeight: 'bold', fontSize: 35 }}
                                    color="primary"
                                />
                            </Avatar>
                        </StyledBadge>


                        {/* <Avatar sx={{ bgcolor: "#424242" }} variant="rounded">
                            <Link href="#" underline="none"> <StyledBadge variant="dot" badgeContent='' color="secondary">
                                <AddLinkIcon className={classes.addLinkIconRotate}></AddLinkIcon>
                            </StyledBadge></Link>
                        </Avatar> */}

                        <Avatar sx={{ bgcolor: "#424242" }} variant="rounded">
                            <Link href="#" underline="none"><GitHubIcon sx={{ color: "#fff" }}></GitHubIcon></Link>
                        </Avatar>
                    </Stack>
                </Toolbar>
            </AppBar>
            {/* TEST MODE Fixed */}
            <Box className={classes.cornerRibbon}
                sx={{ p: 2.5, }}
            >
                <b>TEST MODE</b>
            </Box>
        </Box >
    );
};

export default Navigation;
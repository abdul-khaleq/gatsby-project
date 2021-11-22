import { Badge, Button, Card, CardActionArea, CardContent, CardMedia, Container, FormControl, Grid, Link, OutlinedInput, Paper, TextField, Typography, Box, Stack, Avatar } from '@mui/material';
import React from 'react';
import './SearchBox.css';
import AddLinkIcon from '@mui/icons-material/AddLink';
import carbonad from '../../../images/carbonad-v1.png';
import bmcnewlogo from '../../../images/bmc-new-logo.png';
import Navigation from '../../Navigation/Navigation';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 10,
    top: 45,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 1px',
  },
}));

const handleInput = e => {
  const value = e.target.value;
  console.log(value)
}

const SearchBox = () => {
  return (
    <Box sx={{ bgcolor: '#eceff1' }}>
      <Container align="center" sx={{}}>
        <Navigation></Navigation>

        <Box sx={{ py: 5 }}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <StyledBadge badgeContent='' sx={{
              "& .MuiBadge-badge": {
                color: "#424242",
                backgroundColor: "#424242"
              }
            }} anchorOrigin={{
              vertical: 'bottom', horizontal: 'right',
            }}>
              <Avatar
                sx={{ bgcolor: "#ff9800", width: 80, height: 80 }}
                alt="Remy Sharp" >
                <AddLinkIcon sx={{ fontSize: '3.9rem' }} className="addlinkicon"></AddLinkIcon>
              </Avatar>
            </StyledBadge>  <span className="reffly-style">reffly</span>
          </Stack>


          <Typography variant="body1" sx={{ py: 1 }}>
            Free, Open source, Community driven!
          </Typography>
        </Box>

        {/* search Box  */}
        <Card sx={{ maxWidth: '73%', p: 2, bgcolor: '#F5F5F5' }}>
          <Box> <br />


            <form action="">
              <FormControl sx={{ width: '74%' }}>
                <OutlinedInput type='text' onChange={handleInput} placeholder="Please enter text" />
              </FormControl>
              <Button className="input-button" sx={{
                width: '20%', padding: '15px 14px', ml: 2, bgcolor: 'rgb(59, 59, 59)'
              }} variant="contained" size="large">SHORTEN</Button>
            </form>


          </Box>
          <Typography variant="body1" align='left' sx={{ py: 2, ml: 3 }}>
            By using our service, you accept our
            <Link href="#" underline="none">Terms </Link> &#38;
            &nbsp;
            <Link href="#" underline="none">Privacy </Link>
          </Typography>
        </Card>
        {/* Fund us on  */}
        <Box
          sx={{
            mx: 'auto',
            width: '60%',
            py: 8,
            borderRadius: 1,
            textAlign: 'center',
          }}
        >
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <CardMedia
                component="img"
                image={carbonad}
                alt="green iguana"
              />

            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" align='left'>
                Fund us on -
              </Typography>
              <CardMedia
                component="img"
                image={bmcnewlogo}
                alt="bmc new logo"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchBox;
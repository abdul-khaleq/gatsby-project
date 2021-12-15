import { Badge, Button, Card, CardActionArea, CardContent, CardMedia, Container, FormControl, Grid, Link, OutlinedInput, Paper, TextField, Typography, Box, Stack, Avatar } from '@mui/material';
import React from 'react';
import AddLinkIcon from '@mui/icons-material/AddLink';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import carbonad from '../../../images/carbonad-v1.png';
import bmcnewlogo from '../../../images/bmc-new-logo.png';
import Navigation from '../../Navigation/Navigation';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 10,
    top: 45,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 1px',
  },
}));
const useStyles = makeStyles({
  refflyStyle: {
    color: 'rgba(0, 0, 0, 0.87)',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
    fontFamily: "Beth Ellen",
    fontSize: '40px',
    fontWeight: '700',
    marginLeft: '5px',
  },
  InsertLinkIcon: {
    transform: 'rotate(-48deg)',
    color: 'rgb(46, 46, 46)',
  },
});



const SearchBox = () => {
  const classes = useStyles();
  return (
    <Box sx={{ bgcolor: '#eceff1' }}>
      <Container align="center" sx={{}}>
        <Navigation></Navigation>
        <Box sx={{ py: 5 }}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <StyledBadge badgeContent='' sx={{
              "& .MuiBadge-badge": {
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor: "rgba(0, 0, 0, 0.87)"
              }
            }} anchorOrigin={{
              vertical: 'bottom', horizontal: 'right',
            }}>
              <Avatar
                sx={{ bgcolor: "#ff9800", width: 80, height: 80 }}
                alt="Remy Sharp" >
                <InsertLinkIcon sx={{ fontSize: '4rem' }} className={classes.InsertLinkIcon}></InsertLinkIcon>
              </Avatar>
            </StyledBadge>  <span className={classes.refflyStyle}>reffly</span>
          </Stack>
          <Typography variant="body1" sx={{ py: 1 }}>
            Free, Open source, Community driven!
          </Typography>
        </Box>

        {/* search Box  */}

        <Grid item xs={12} sm={10} md={9}>
          <Card sx={{ bgcolor: '#F5F5F5' }}>
            <Box sx={{ width: '95%', py: 5 }}>
              <form action="">
                <FormControl sx={{ width: '75%' }}>
                  <OutlinedInput type='text' placeholder="Enter your long URL here" />
                </FormControl>
                <Button sx={{
                  width: '24%', padding: '15px 14px', ml: '1%', bgcolor: 'rgb(59, 59, 59)', '&:hover': {
                    backgroundColor: '#0E4686'
                  }
                }} variant="contained" size="large">SHORTEN</Button>
              </form>
              <Typography variant="body1" align='left' sx={{ mt: 3 }} >
                By using our service, you accept our
                <Link href="#" underline="none">Terms </Link> &#38;
                &nbsp;
                <Link href="#" underline="none">Privacy </Link>
              </Typography>
            </Box>
          </Card>
        </Grid>

        {/* Fund us on  */}
        <Box sx={{ py: 6, }}>
          <Grid container spacing={{ xs: 2, md: 3 }} sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Grid item xs={12} sm={4}>
              <CardMedia
                component="img"
                image={carbonad}
                alt="green iguana"
              />

            </Grid>
            <Grid item xs={12} sm={4}>
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
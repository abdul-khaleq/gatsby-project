import { Avatar, Badge, CardMedia, Container, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import '../../Custom.css';
import nicechartjs from '../../../images/nicechartjs-v1.png';
import nodejs from '../../../images/nodejs-v2.svg';
import mongodb from '../../../images/mongodb-v1.svg';
import nginx from '../../../images/nginx-v1.svg';
import heroku from '../../../images/heroku-v1.svg';
import aicat from '../../../images/aicat-v1.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddLinkIcon from '@mui/icons-material/AddLink';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
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
  addlinkicon: {
    transform: 'rotate(-60deg)',
    color: '#424242',
    fontSize: '3.9rem',
  },
  imageGrayscale: {
    filter: 'grayscale(70%)',
    opacity: 0.2,
  },
  icon: {
    color: '#424242',
    fontSize: '1.5rem',
  },
});

const Enterprise = () => {
  const classes = useStyles();
  return (
    <Box className="enterprise" sx={{ backgroundColor: '#dbe3ed' }}>
      <Container >
        <Typography variant="h4" component="div" py={5} align="center" fontSize="2rem">
          FOR ENTERPRISE
        </Typography>

        <Grid container spacing={2}>
          <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} item xs={12} sm={6} md={6}>
            <Box >
              <Typography variant="h5" gutterBottom component="div" fontSize="1.75rem" align="right">
                Self host <strong><i>reffly</i></strong> for full features including Link tracking Statistics, Branding &#38; more... <br />or Try <strong><i>reffly plus</i></strong>
              </Typography>

              {/* reffly with budge and icon  */}
              <Stack direction="row" sx={{ alignItems: "stretch", justifyContent: "flex-end" }}>
                <StyledBadge badgeContent='' sx={{
                  "& .MuiBadge-badge": {
                    color: "#424242",
                    backgroundColor: "#424242"
                  }
                }} anchorOrigin={{
                  vertical: 'bottom', horizontal: 'right',
                }}>
                  <Avatar
                    sx={{ bgcolor: "#4caf50", width: 80, height: 80 }}
                    alt="Remy Sharp" >
                    <AddLinkIcon sx={{ fontSize: '3.9rem' }} className={classes.addlinkicon}></AddLinkIcon>
                  </Avatar>
                </StyledBadge>  <span className={classes.refflyStyle}>reffly
                  <sup style={{ mr: '-10' }}>+</sup></span>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Paper elevation={1}>
              <CardMedia className={classes.imageGrayscale}
                component="img"
                image={nicechartjs}
                alt="green iguana"
              />
            </Paper>
          </Grid>
        </Grid>
        {/* freemium technologies  */}
        <Typography variant="h5" gutterBottom component="div" fontSize="1.75rem" align="center" my={5}>
          Play with <strong><i>reffly</i> </strong> using freemium technologies, <Link href="#" underline="none">learn more ... </Link>
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={3} md={3}>
            <Paper sx={{ py: 2, opacity: '0.8', filter: 'grayscale(90%)' }} elevation={0} >
              <CardMedia sx={{ filter: 'grayscale(90%)' }}
                component="img"
                height=""
                image={nodejs}
                alt="NodeJS"
              />
            </Paper>
          </Grid>
          <Grid item xs={3} md={3}>
            <Paper sx={{ py: 2, opacity: '0.8', filter: 'grayscale(90%)' }} elevation={0} >
              <CardMedia sx={{ filter: 'grayscale(90%)' }}
                component="img"
                height=""
                image={mongodb}
                alt="MongoDB"
              />
            </Paper>
          </Grid>
          <Grid item xs={3} md={3}>
            <Paper sx={{ py: 2, opacity: '0.8', filter: 'grayscale(90%)' }} elevation={0} >
              <CardMedia sx={{ filter: 'grayscale(90%)' }}
                component="img"
                height=""
                image={nginx}
                alt="Nginx"
              />
            </Paper>
          </Grid>
          <Grid item xs={3} md={3}>
            <Paper sx={{ py: 2, opacity: '0.8', filter: 'grayscale(90%)' }} elevation={0} >
              <CardMedia sx={{ filter: 'grayscale(90%)' }}
                component="img"
                height=""
                image={heroku}
                alt="Heroku"
              />
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="body1" gutterBottom align="center" mt={2} mb={5}>
          Need help? hire me on <Link href="#" underline="none">Freelancer.com</Link>
        </Typography>
      </Container>

      <Grid container  >
        <Grid item xs={6} sx={{ backgroundColor: '#ECEFF1', borderTopRightRadius: '50px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Box>
            <Typography variant="h6" component="div" fontSize="1.25rem" sx={{ ml: 6, mr: 3 }}>
              An open source contribution by
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: '#ECEFF1', borderTopLeftRadius: '50px' }}>
          <Box sx={{ maxWidth: '60%', py: 3, pl: 2 }}>
            <CardMedia
              component="img"
              image={aicat}
              alt="AiCat"
            />
          </Box>
        </Grid>
      </Grid>


      <Box sx={{ backgroundColor: '#ECEFF1' }}>
        <Divider style={{ borderTop: '1px solid grey' }} />
        <Container sx={{ py: 2 }}>
          <Grid container >
            <Grid item xs={8} md={5} order={{ xs: 1, md: 1 }}>
              <Typography variant="body1">
                Made with<FavoriteIcon sx={{ color: '#d32f2f' }} /> in <strong>Bangladesh</strong>
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} order={{ xs: 3, md: 2 }}>
              <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>

                Copyright &copy; 2021 Reff.ly  | <Link href="#" underline="none">Terms</Link>  | <Link href="#" underline="none">Privacy</Link>
              </Typography>
            </Grid>
            <Grid item xs={4} md={2} order={{ xs: 2, md: 3 }}>

              <Link href="#" underline="none"><GitHubIcon className={classes.icon}></GitHubIcon></Link>
              <Link sx={{ ml: 1 }} href="#" underline="none"><LinkedInIcon className={classes.icon}></LinkedInIcon></Link>
              <Link sx={{ ml: 1, fontSize: '#424242' }} href="#" underline="none"><FacebookIcon className={classes.icon}></FacebookIcon></Link>

            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box >
  );
};

export default Enterprise;
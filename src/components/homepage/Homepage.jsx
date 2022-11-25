import React from 'react';
import { Container, Box } from '@mui/system';
import background from '../../assets/homepage.jpeg';
import { Typography } from '@mui/material';
function Homepage() {
  return (
    <Container
      maxWidth='xl'
      element={'section'}
      sx={{
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Box>
        <Typography
          variant='h4'
          component={'em'}
          sx={{ color: 'bisque', fontStyle: 'italic' }}>
          ”Chess is the queen of all games, the brilliant phenomenon of one of
          the best manifestations of human genius...”
        </Typography>
        <Typography
          align='right'
          variant='h5'
          component={'h2'}
          sx={{ color: 'bisque' }}>
          Emil Kazaz
        </Typography>
      </Box>
    </Container>
  );
}

export default Homepage;

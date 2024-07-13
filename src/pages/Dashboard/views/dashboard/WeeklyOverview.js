import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Grid, Button, Link } from '@mui/material';

const WeeklyOverview = () => {
  const handleConstructionPostClick = () => {
    // Handle navigation to construction post section
  };

  const handleRealEstatePostClick = () => {
    // Handle navigation to real estate post section
  };

  const handleOtherPostClick = () => {
    // Handle navigation to other post section
  };

  return (
      <Container>
        {/* Other Post Section */}
        <Grid item xs={12} sm={6} md={4}>
        <Link href='/Dashboard/pages/RealEstate'>
              <Button variant="contained" onClick={handleOtherPostClick} style={{paddingRight: '100px', paddingLeft: "120px", paddingTop: '50px', paddingBottom: '50px'}}>
                <Typography color="white" fontWeight="bold">
                    Real Estate
                </Typography>
              </Button>
        </Link>
        </Grid>
      </Container>
  );
};

export default WeeklyOverview;

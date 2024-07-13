import React from 'react'
import { Container, Grid, Button, Typography, Link } from '@mui/material';

const DeleteSlider = () => {
  return (
    <Container>
      {/* Delete Testimonial Post Section */}
      <Grid item xs={12} sm={6} md={4}>
        <Link href='/Dashboard/pages/HomePageSlider/DeleteSlider'>
          <Button variant="contained" style={{ padding: '70px' }}>
            <Typography color="white" fontWeight="bold">
              Delete HomePageSlider
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}

export default DeleteSlider;
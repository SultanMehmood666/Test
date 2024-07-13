import React from 'react'
import { Container, Grid, Button, Typography, Link } from '@mui/material';

const Testimonial = () => {
  return (
    <Container>
      {/* Construction Post Section */}
      <Grid item xs={12} sm={6} md={4}>
        <Link href='/Testimonials/Reviews'>
          <Button variant="contained" style={{ padding: '70px' }}>
            <Typography color="white" fontWeight="bold">
              Testimonials
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}

export default Testimonial
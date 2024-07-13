import React from 'react'
import { Container, Grid, Button, Typography, Link } from '@mui/material';

const DeleteTestimonial = () => {
  return (
    <Container>
      {/* Delete Testimonial Post Section */}
      <Grid item xs={12} sm={6} md={4}>
        <Link href='/Testimonials/DeleteTestimonial'>
          <Button variant="contained" style={{ padding: '70px' }}>
            <Typography color="white" fontWeight="bold">
              Delete Testimonials
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}

export default DeleteTestimonial
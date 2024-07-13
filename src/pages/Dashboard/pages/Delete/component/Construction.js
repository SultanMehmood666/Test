import { Container, Grid, Button, Typography, Link } from '@mui/material';

const DeleteConstruction = () => {
  return (
    <Container>
      {/* Construction Post Section */}
      <Grid item xs={12} sm={6} md={4}>
        <Link href='/Dashboard/pages/Delete/DeleteProject'>
          <Button variant="contained" style={{ padding: '70px' }}>
            <Typography color="white" fontWeight="bold">
              Delete Projects
            </Typography>
          </Button>
        </Link>♦
      </Grid>
    </Container>
  )
}

export default DeleteConstruction;
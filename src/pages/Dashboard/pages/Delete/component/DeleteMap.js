import { Container, Grid, Button, Typography, Link } from '@mui/material';

const DeleteMap = () => {
  return (
    <Container>
      {/* Construction Post Section */}
      <Grid item xs={12} sm={6} md={4}>
        <Link href='Delete/RemoveMap'>
          <Button variant="contained" style={{ padding: '70px' }}>
            <Typography color="white" fontWeight="bold">
              Delete Maps
            </Typography>
          </Button>
        </Link>♦
      </Grid>
    </Container>
  )
}

export default DeleteMap;
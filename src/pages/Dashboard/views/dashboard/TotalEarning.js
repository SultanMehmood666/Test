// ** MUI Imports
import { Container, Grid, Button, Link } from '@mui/material';
import Typography from '@mui/material/Typography'


const TotalEarning = () => {
  return (
    <Container>
      {/* Construction Post Section */}
      <Grid item xs={12} sm={6} md={4}>
        <Link href='/Dashboard/pages/Interrior'>
          <Button variant="contained" style={{ padding: '70px' }}>
            <Typography color="white" fontWeight="bold">
              Interrior Design
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}

export default TotalEarning

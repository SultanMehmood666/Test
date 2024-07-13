// ** MUI Imports
import Grid from '@mui/material/Grid'
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports

import TotalEarning from 'src/views/dashboard/TotalEarning'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import Table from 'src/views/dashboard/Table'
import DeleteConstruction from './component/Construction'
import DeleteBlog from './component/DeleteBlog'
import DeleteMap from './component/DeleteMap'

const index = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <DeleteConstruction/>
        </Grid>
        <Grid item xs={12} md={4}>
            <DeleteBlog/>
        </Grid>
        <Grid item xs={12} md={4}>
            <DeleteMap/>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default index
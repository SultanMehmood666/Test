// ** MUI Imports
import Grid from '@mui/material/Grid'
// ** Styled Component Import
import ApexChartWrapper from '@/DashboardComponents/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Construct from './views/dashboard/Construct'
import TotalEarning from './views/dashboard/TotalEarning'
import WeeklyOverview from './views/dashboard/WeeklyOverview'
import Table from './views/dashboard/Table'

const Dashboard = () => {
  const imageUrl = 'https://micasa-server-test.vercel.app/api/files/construction/Gallery/1717501724170-399171263_417008424465768_5314623793987934831_n.png';
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Construct />
        </Grid>
        <Grid item xs={12} md={4}>
        <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Table/>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard;
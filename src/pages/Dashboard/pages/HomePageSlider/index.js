import { Grid } from "@mui/material";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import HomePageSlider from "./Component/HomePageSlider";
import DeleteSlider from "./Component/DeleteSlider";

const index = () => {
  return (
<>
<ApexChartWrapper>
  <Grid container spacing={6}>
    <Grid item xs={12} md={4}>
        <HomePageSlider/>
    </Grid>
    <Grid item xs={12} md={4}>
        <DeleteSlider/>
    </Grid>
  </Grid>
</ApexChartWrapper>
</>
  );
};

export default index;

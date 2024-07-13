import { Grid } from "@mui/material";
import DeleteTestimonial from "./Component/DeleteTestimonial";
import Testimonial from "./Component/Testimonial";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

const index = () => {
  return (
<>
<ApexChartWrapper>
  <Grid container spacing={6}>
    <Grid item xs={12} md={4}>
      <Testimonial/>
    </Grid>
    <Grid item xs={12} md={4}>
      <DeleteTestimonial/>
    </Grid>
  </Grid>
</ApexChartWrapper>
</>
  );
};

export default index;

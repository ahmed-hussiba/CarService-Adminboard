import React from 'react';
import { Typography, Container } from '@mui/material';
import MostRequiredServicesLineChart from './mostRequiredServicesLineChart';
import MostRequestedProvidersPiechart from './MostRequestedProvidersPiechart';
import { UsersCountBarchart } from './UsersCountBarchart';
import ServicesPerDayLineChart from './ServicesPerDayLineChart';


const AnalysisBoard = () => {
  return (
    <>
      <Typography variant="h4" sx={{textAlign:"center",marginBottom:"5rem",marginTop:"-3rem"}}>
        Analysis Board
      </Typography>
      
      <Container sx={{display:"flex",marginBottom:"5rem",justifyContent:"space-evenly"}}>
        <MostRequiredServicesLineChart></MostRequiredServicesLineChart>
        <MostRequestedProvidersPiechart></MostRequestedProvidersPiechart>
      </Container>
      <Container  sx={{display:"flex",marginBottom:"5rem",justifyContent:"space-evenly"}}>

      <UsersCountBarchart></UsersCountBarchart>
      <ServicesPerDayLineChart></ServicesPerDayLineChart>
      </Container>

    </>
  );
};

export default AnalysisBoard;

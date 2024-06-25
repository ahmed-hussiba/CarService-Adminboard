import React from 'react';
import { Typography, Container } from '@mui/material';
import {UsersCountBarchart} from './Charts/UsersCountBarchart'
import MostRequestedProvidersPiechart from './Charts/MostRequestedProvidersPiechart';

const AnalysisBoard = () => {
  return (
    <Container sx={{display: 'flex'}}>
      <UsersCountBarchart />
      <MostRequestedProvidersPiechart />
    </Container>
  );
};

export default AnalysisBoard;

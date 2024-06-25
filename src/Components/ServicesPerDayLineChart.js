import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import axios from 'axios';
import { Paper, Typography } from '@mui/material';

export default function ServicesPerDayLineChart() {
  const [requests,setRequests] =  React.useState();
  React.useEffect(() => {
    axios.get("http://192.168.1.4:8000/api/analysis").then((data) => {
      let datesArr = data.data.servicesWithDates;
      console.log(datesArr);
      let obj = {};
      datesArr.forEach(element => {
        obj[`${element.requestDate.substring(0,10)}`] = obj[`${element.requestDate.substring(0,10)}`]? obj[`${element.requestDate.substring(0,10)}`]+1 : 1;
      });
      setRequests(obj);
    });
  }, []);
  if(!requests)
    return <p>loading....</p>
  return (
    <Paper sx={{display:"flex",justifyContent:"center",flexDirection:"column",width:"40%"}}>
        <Typography variant="h6" gutterBottom sx={{width:"100%",textAlign:"center"}}>
            Number Of Services Per Day
        </Typography>
    <LineChart
      xAxis={[{ scaleType:"point", data: Object.keys(requests) }]}
      series={[
        {
          data: Object.values(requests),
        },
      ]}
      width={400}
      height={300}
    />
    </Paper>
  );
}
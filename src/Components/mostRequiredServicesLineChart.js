import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import axios from 'axios';
import { Paper, Typography } from '@mui/material';

export default function MostRequiredServicesLineChart() {
    const [analysisData,setAnalysisData] = React.useState();

    React.useEffect(()=>{
        axios.get('http://localhost:8000/api/analysis').then((data)=>{
            let servicesArr = data.data.services
            // console.log(servicesArr);
            setAnalysisData(servicesArr)
        })
    },[])
    if(!analysisData)
        return <p>loading.....</p>
  return (
        <Paper sx={{display:"flex",justifyContent:"center",flexDirection:"column",width:"40%",}}>
        <Typography variant="h6" gutterBottom sx={{width:"100%",textAlign:"center"}}>
            Most Requested Services
        </Typography>
    <LineChart
      xAxis={[{scaleType:"point", data: analysisData.map((item)=>item.name)}]}
      series={[
        {
          data: analysisData.map((item)=>item.numberOfRequests),
          area: true,
        curve:"linear",
        color:"orange"
        },
      ]}
      width={400}
      height={300}
      
    />

    </Paper>
  );
}
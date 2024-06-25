import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Typography } from "@mui/material";

export default function MostRequestedProvidersPiechart() {
  const [analysisData, setAnalysisData] = useState();

  useEffect(() => {
    axios.get("http://192.168.1.4:8000/api/analysis").then((data) => {
      let servicesArr = data.data.providers;
      console.log(servicesArr);
      setAnalysisData(servicesArr);
    });
  }, []);
  if (!analysisData) return <p>loading.....</p>;
  return (
    <Paper sx={{display:"flex",justifyContent:"center",flexDirection:"column",width:"40%"}}>
        <Typography variant="h6" gutterBottom sx={{width:"100%",textAlign:"center"}}>
            Most Requested Providers
        </Typography>
        <paper style={{width:"100%",display:"flex"}}>
        <PieChart
        
        series={[
          {
            data: analysisData.map((item, index) => {
              return {
                id: index,
                value: item.numberOfRequests,
                label: item.name,
              };
            }),
          },
        ]}
        width={600}
        height={300}
      />
        </paper>
      
    </Paper>
  );
}

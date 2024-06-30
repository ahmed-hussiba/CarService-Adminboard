
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";
import { Paper, Typography } from "@mui/material";

export function UsersCountBarchart() {

  const [consumersCount, setConsumersCount] = React.useState()
  const [ProvidersCount, setProvidersCount] = React.useState()

  React.useEffect(() => {
    axios.get("http://localhost:8000/api/user/count").then((res) => {
      console.log(res.data);
      setConsumersCount(res.data);
    })

    axios.get("http://localhost:8000/api/serviceProvider/count").then((res) => {
      console.log(res.data);
      setProvidersCount(res.data);
    })

  }, [])


  return (
    <Paper sx={{display:"flex",justifyContent:"center",flexDirection:"column",width:"40%"}}>
        <Typography variant="h6" gutterBottom sx={{width:"100%",textAlign:"center"}}>
            Number Of Consumers And Providers
        </Typography>
    <BarChart
      xAxis={[{ scaleType: "band", data: [""] }]}
      series={[
        { data: [consumersCount], label: "consumers", color: "maroon" },
        { data: [ProvidersCount], label: "Providers", color: "navy" },
      ]}
      width={450}
      height={300}
    />
    </Paper>
  );
}
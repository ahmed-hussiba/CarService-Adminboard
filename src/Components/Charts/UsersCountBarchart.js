import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";

export function UsersCountBarchart() {

  const [consumersCount, setConsumersCount] = React.useState()
  const [ProvidersCount, setProvidersCount] = React.useState()

  React.useEffect(() => {
    axios.get("http://192.168.1.4:8000/api/user/count").then((res) => {
      console.log(res.data);
      setConsumersCount(res.data);
    })

    axios.get("http://192.168.1.4:8000/api/serviceProvider/count").then((res) => {
      console.log(res.data);
      setProvidersCount(res.data);
    })

  }, [])


  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: [""] }]}
      series={[
        { data: [consumersCount], label: "consumers", color: "red" },
        { data: [ProvidersCount], label: "Providers", color: "black" },
      ]}
      width={500}
      height={300}
    />
  );
}

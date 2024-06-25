import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function MostRequestedProvidersPiechart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Provider 1' },
            { id: 1, value: 15, label: 'Provider 2' },
            { id: 2, value: 20, label: 'Provider 3' },
            { id: 3, value: 20, label: 'Provider 4' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}

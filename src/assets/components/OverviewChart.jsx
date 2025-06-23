import React from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import { Card } from "@mui/material";
import "./OverviewChart.css";

const OverviewChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  const hospitalizedData = [100, 140, 130, 160, 180, 200];
  const outpatientData = [80, 90, 98, 120, 150, 170];

  return (
    <Card className="overview-card">
      <h3>Overview</h3>
      <LineChart
        height={300}
        series={[
          { data: hospitalizedData, label: 'Hospitalized patients', color: '#0ea5e9' },
          { data: outpatientData, label: 'Outpatients', color: '#10b981' }
        ]}
        xAxis={[{ scaleType: 'point', data: months }]}
      />
    </Card>
  );
};

export default OverviewChart;
import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import StatsCard from '../components/StatsCard'; // Assuming you have a StatsCard component
import Chart from '../components/Charts'; // Assuming you have a Chart component

const Dashboard = () => {
  return (
    <div><br></br>
    <br></br>
      <Typography variant="h3">Dashboard</Typography>
      <br />
      <Typography variant="body1">Welcome to the admin dashboard!</Typography>
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <StatsCard title="Total Users" value="1,234" />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatsCard title="Total Sales" value="$12,345" />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatsCard title="New Signups" value="123" />
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ padding: '16px' }}>
              <Chart />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;

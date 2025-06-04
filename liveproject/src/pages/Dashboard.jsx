// src/pages/Dashboard.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Today's Attendance
              </Typography>
              <Typography variant="body2">Checked in: 9:00 AM</Typography>
              <Typography variant="body2">Working Hours: 5 hrs</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Meetings
              </Typography>
              <Typography variant="body2">10:30 AM - Project Sync</Typography>
              <Typography variant="body2">3:00 PM - Client Call</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Work Summary
              </Typography>
              <Typography variant="body2">Tasks Completed: 4</Typography>
              <Typography variant="body2">Pending Tasks: 2</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

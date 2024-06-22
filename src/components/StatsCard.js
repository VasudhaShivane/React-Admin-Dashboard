import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const StatsCard = ({ title, value }) => {
  const theme = useTheme();

  return (
    <Card style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h3">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;

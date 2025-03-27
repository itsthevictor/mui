import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const BasicCard = ({ header, content, sx }) => {
  return (
    <Card sx={sx}>
      {header}
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default BasicCard;

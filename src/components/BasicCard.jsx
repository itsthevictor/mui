import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

const BasicCard = ({ header, content, sx }) => {
  return (
    <Card sx={sx}>
      {header}
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default BasicCard;

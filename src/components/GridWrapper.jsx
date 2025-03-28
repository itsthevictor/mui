import React from 'react';
import { Grid2 } from '@mui/material';
const GridWrapper = ({ children }) => {
  const gridWrapperStyles = {};
  return <Grid2 sx={gridWrapperStyles}>{children}</Grid2>;
};

export default GridWrapper;

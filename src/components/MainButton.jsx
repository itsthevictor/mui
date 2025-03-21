import React from 'react';
import Button from '@mui/material/Button';

const MainButton = ({ children, color, disabled, size, variant, sx }) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default MainButton;

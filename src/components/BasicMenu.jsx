import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const BasicMenu = ({ anchorEl, handleClose, open, menuItems }) => {
  return (
    <div>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems &&
          menuItems.map((item, i) => <MenuItem key={i}>{item.label}</MenuItem>)}
      </Menu>
    </div>
  );
};

export default BasicMenu;

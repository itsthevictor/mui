import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from './BasicMenu';
const NotificationBell = ({ content, menuItems }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const newNotifications = `You have ${content} new notificatinos`;
  const noNotificaitons = `You don't have new notifications`;

  return (
    <>
      <Tooltip title={content ? newNotifications : noNotificaitons}>
        <IconButton anchorEl={anchorEl} onClick={content ? handleOpen : null}>
          <Badge badgeContent={content} color='primary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        menuItems={menuItems}
      />
    </>
  );
};

export default NotificationBell;

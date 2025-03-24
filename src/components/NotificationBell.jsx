import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
const NotificationBell = ({ content }) => {
  return (
    <IconButton>
      <Badge badgeContent={content} color='primary'>
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default NotificationBell;

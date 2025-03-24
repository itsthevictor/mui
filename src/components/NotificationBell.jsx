import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
const NotificationBell = ({ content }) => {
  const newNotifications = `You have ${content} new notificatinos`;
  const noNotificaitons = `You don't have new notifications`;
  return (
    <Tooltip title={content ? newNotifications : noNotificaitons}>
      <IconButton>
        <Badge badgeContent={content} color='primary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default NotificationBell;

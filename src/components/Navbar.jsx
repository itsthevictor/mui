import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NAVLINKS from '../../utils/Links';
import { navbarStyles } from './styles';

const Navbar = () => {
  return (
    <div>
      {' '}
      <Drawer sx={navbarStyles.drawer} variant='permanent' anchor='left'>
        <Toolbar />
        <Divider />
        <List>
          {NAVLINKS.map((item, i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={navbarStyles.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List></List>
      </Drawer>
    </div>
  );
};

export default Navbar;

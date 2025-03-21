import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
const NAVLINKS = [
  {
    text: 'tablou',
    path: '.',
    icon: <DashboardIcon />,
  },
  { text: 'leaduri', path: 'leads', icon: <EmojiPeopleIcon /> },
  { text: 'clienți', path: 'clienti', icon: <HandshakeIcon /> },
  { text: 'măsuri', path: 'masuri', icon: <ListAltIcon /> },
  { text: 'rapoarte', path: 'rapoarte', icon: <InsertChartIcon /> },
  {
    text: 'admin',
    path: 'admin',
    icon: <AdminPanelSettingsIcon />,
    children: [
      {
        text: 'companii',
        path: '/admin/companii',
        // icon: <MdOutlineArrowRight size={17} />,
      },
    ],
  },
  {
    text: 'useri',
    path: 'useri',
    icon: <SupervisorAccountIcon />,
    children: [
      {
        text: 'adaugă user',
        path: '/useri/adauga-user',
        // icon: <MdOutlineArrowRight size={17} />,
      },
    ],
  },
];

export default NAVLINKS;

import HomeIcon from '@mui/icons-material/Home';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
export const navLinks = [
    {
      name: 'Home',
      icon: <HomeIcon />,
    },
    {
        name:'Stats',
        icon: <InsertChartOutlinedOutlinedIcon />,
    },
    {
        name:'ClipBoard',
        icon: <AssignmentTurnedInOutlinedIcon />,
    },
    {
        name:'Wallet',
        icon: <AccountBalanceWalletIcon />,
    },
    {
        name:'Bag',
        icon: <LocalMallOutlinedIcon />,
    },
]
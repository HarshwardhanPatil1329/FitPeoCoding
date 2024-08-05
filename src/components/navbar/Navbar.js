import React from 'react'
import styles from "./Navbar.module.css"
import {  List, ListItem, ListItemIcon } from '@mui/material';
import { Home } from '@mui/icons-material';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import WidgetsIcon from '@mui/icons-material/Widgets';

const Navbar = () => {
    
  return (
    <>
            <div style={{ width: '60px', background: '#2d2d2d', color: '#fff', height: '100vh',paddingTop: '20px',position:'fixed' }}>
            <WidgetsIcon className={styles.widget}/>
            <List>
            <ListItem button  style={ {borderLeft:"1px solid #00FFFF"}}>
                <ListItemIcon >
                    <Home style={{color:"#00FFFF"}} />
                </ListItemIcon>
                
            </ListItem>
            <ListItem button >
                <ListItemIcon>
                    <InsertChartOutlinedOutlinedIcon style={{color: '#fff'}}/>
                </ListItemIcon>
            
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentTurnedInOutlinedIcon style={{ color: '#fff' }} />
                </ListItemIcon>
            
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AccountBalanceWalletIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LocalMallOutlinedIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                
            </ListItem>
        </List>
        
        <div style={{display:"flex",alignItems:"end",height:'60%', vwidth:'60px', background: '#2d2d2d', color: '#fff'}}>
          
            <ListItem button  >
                <ListItemIcon>
                <LogoutIcon style={{ color: '#fff' }}/>
                </ListItemIcon>
            </ListItem>
            
       </div>
    </div>
       </>
    );
};

export default Navbar;

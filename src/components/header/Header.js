import React from 'react'
import { Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Header.module.css"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManIMG from "../../Assests/dummy-man.png"
import WidgetsIcon from '@mui/icons-material/Widgets';


const Header = () => {
  return (
   <div className={styles.mainContainer}>
   
       <Grid container>
       
            <Grid item lg={6} md={6} xs={6}>
              <div style={{display:'flex'}}>
                    <WidgetsIcon className={styles.widget}/>
                    <div className={styles.searchContainer}>
                    <span><SearchIcon className={styles.searchIcon}/></span>
                    <input type="text" placeholder='Search' className={styles.search}/>
                    </div>
              </div>  
            </Grid>
            <Grid item lg={5.5} md={5.5} sx={3}>
                
                <div className={styles.container}>
                    <span className={styles.circle}><EmailOutlinedIcon className={styles.email}/></span>
                    <span className={styles.circle}><SettingsOutlinedIcon className={styles.email}/></span>
                    <span className={styles.circle}> 
                        {/* <Badge badgeContent="" color="primary" variant='dot' className={styles.badge} > */}
                         <NotificationsNoneIcon className={styles.emailNotification}/>
                        {/* <img src={NotificationBell} alt="bell" width="20px" height='20px' className={styles.emailNotification}/> */}
                        {/* </Badge> */}
                    </span>
                </div>
                
            </Grid>
            <Grid item lg={0.5} md={0.5} xs={1}>
            <div className={styles.container2}>
            <span className={styles.circle1}><img src={ManIMG} alt="man"className={styles.circle1}/></span>
            </div>
            </Grid>   
         </Grid>
        </div>
    
  )
}

export default Header
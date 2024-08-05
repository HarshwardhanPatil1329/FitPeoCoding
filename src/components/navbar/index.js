import React from 'react'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import { navLinks } from './data'

const NavComponent = () => {
    console.log("nav",navLinks);
    
  return (
    <div>
      <Grid container>
        <Grid
          item
          md={1}
          lg={1}
          xs={0}
          sm={0}
          sx={{ display: { xs: "none", md: "block", lg: "block", sm: "none" } }}
        >
         <Navbar links={navLinks}/>
        </Grid>
        <Grid
          xs={12}
          md={0}
          lg={0}
          sm={12}
          sx={{
            display: { xs: "block", md: "none", lg: "none", sm: "block" },
          }}
          item
        >
          <BottomNav/>
        </Grid>
      </Grid>
    </div>
  )
}

export default NavComponent

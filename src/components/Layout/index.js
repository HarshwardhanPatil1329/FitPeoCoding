import React from 'react'
import Header from '../header/Header'
import { Grid } from '@mui/material'
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <Navbar/>
       
       
        <Grid Container sx={{ paddingBottom: '80px' }}>
        <Grid
          item
          md={1}
          lg={1}
          xs={0}
          sm={0}
          sx={{ display: { xs: 'none', md: 'block', lg: 'block', sm: 'none' } }}
        >
          {children}
        </Grid>
        <Grid
          item
          xs={1}
          md={0}
          lg={0}
          sm={1}
          sx={{ display: { xs: 'block', md: 'none', lg: 'none', sm: 'block' } }}
        >
          {children}
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Layout

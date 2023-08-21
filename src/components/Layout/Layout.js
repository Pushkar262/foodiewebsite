import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Box } from "@mui/material"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ height: '42px' }}></Box>
      {children}
      <Footer />
    </>
  )
}

export default Layout

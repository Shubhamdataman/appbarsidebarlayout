import { Box } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
     <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: '64px', 
        }}
      >
       <h1>Dashboard</h1>
      </Box> 
  )
}

export default Dashboard

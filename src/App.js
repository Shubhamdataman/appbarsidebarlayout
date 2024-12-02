import React, { useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import { Box } from '@mui/material';
import AllRoutes from './Routes/AllRoutes';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <AllRoutes/>
    </Box>
  );
}

export default App;

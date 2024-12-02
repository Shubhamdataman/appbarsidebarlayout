import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate();
  const menuItems = [
    { text: 'Dashboard', path: '/' },
    { text: 'Settings', path: '/settings' },
    { text: 'Profile', path: '/profile' },
    { text: 'Logout', path: '/logout' },
  ];

  const handleMenuClick = (path) => {
    navigate(path);
    toggleSidebar();
  };

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      sx={{
        '& .MuiDrawer-paper': {
          width: {
            xs: 150, // 180px for mobile
            sm: 240, // 240px for larger screens
          },
          boxSizing: 'border-box',
          marginTop: {
            xs: '56px', // Adjust for mobile header height
            sm: '64px', // Adjust for desktop header height
          },
          height: `calc(100vh - ${56}px)`, // Ensures sidebar doesn't exceed the view height
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <List>
        {menuItems.map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleMenuClick(path)}>
              <ListItemText primary={text} sx={{ color: '#fff' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;

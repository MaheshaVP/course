import { AppBar, Box, Container, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import './Navbar.css';
import CoffeeIcon from '@mui/icons-material/Coffee';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';


const Navbar = () => {
  const[drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  const drawerLinks = [
    {
      text: "Home",
      link: "#home"
    },
    {
      text: "Coffee",
      link: "#coffee"
    }
  ]
    

  return (
    <>
      <AppBar position='sticky' color='primary'>
        <Container>
          <Toolbar>
            <CoffeeIcon />
            <Typography variant='h6' sx={{flexGrow:1, fontFamily:'"Eagle Lake",serif'}}>
                Coffee Shop
            </Typography>
            {isMobile && (
              <IconButton color='inherit' onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}

            {!isMobile && (
              <>
                <Button color="inherit" href="#home">Home</Button>
                <Button color="inherit" href="#coffee">Coffee</Button>
              </>
            )}

            
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{width: 200}} role="presentation" onClick={toggleDrawer}>
          <List>
            {drawerLinks.map((linkItem, index) => {
              return(
                <ListItem key={index} disablePadding>
                <ListItemButton component="a" 
                  href={linkItem.link}
                  onClick={toggleDrawer(false)}
                  aria-label={`Navigate to ${linkItem.text}`}
                >
                  <ListItemText primary={linkItem.text}/>
                </ListItemButton>
              </ListItem>
              );
              
            })}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Examples', path: '/examples' },
    { label: 'Support', path: '/support' },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link href="/" passHref style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
            <Box display="flex" alignItems="center">
              <QueueMusicIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6" noWrap fontWeight="bold">
                Music EPK Creator
              </Typography>
            </Box>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {navItems.map((item) => (
                  <MenuItem 
                    key={item.path} 
                    onClick={() => {
                      handleClose();
                      router.push(item.path);
                    }}
                    selected={router.pathname === item.path}
                  >
                    {item.label}
                  </MenuItem>
                ))}
                <MenuItem 
                  onClick={() => {
                    handleClose();
                    router.push('/login');
                  }}
                >
                  Login
                </MenuItem>
                <MenuItem 
                  onClick={() => {
                    handleClose();
                    router.push('/signup');
                  }}
                >
                  Sign Up
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', mx: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    href={item.path}
                    color="inherit"
                    sx={{ 
                      mx: 1,
                      fontWeight: router.pathname === item.path ? 'bold' : 'normal',
                      borderBottom: router.pathname === item.path ? '2px solid' : 'none',
                      borderRadius: 0,
                      paddingBottom: '4px'
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <Button 
                color="inherit" 
                component={Link} 
                href="/login"
              >
                Login
              </Button>
              <Button 
                variant="contained" 
                color="primary" 
                component={Link} 
                href="/signup"
                sx={{ ml: 2 }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
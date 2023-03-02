import { useState } from 'react';
import { COLORS, HEADER_FONT } from '@/utils/const';
import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PortraitIcon from '@mui/icons-material/Portrait';

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const menuList = [
    {
      icon: (
        <DesktopMacOutlinedIcon sx={{ fontSize: 32, color: COLORS.white }} />
      ),
      text: 'Top'
    },
    {
      icon: <PortraitIcon sx={{ fontSize: 32, color: COLORS.white }} />,
      text: 'Chef Comment'
    },
    {
      icon: <CorporateFareIcon sx={{ fontSize: 32, color: COLORS.white }} />,
      text: 'Company'
    },
    {
      icon: <PersonAddAltIcon sx={{ fontSize: 32, color: COLORS.white }} />,
      text: 'Job'
    }
  ];

  return (
    <>
      <Box
        onClick={() => {
          setOpen(!open);
        }}
        sx={{
          top: 10,
          right: 10,
          display: { xs: 'absolute', md: 'none' },
          visibility: { xs: 'visible', md: 'hidden' },
          position: 'fixed',
          zIndex: 1000
        }}
      >
        <MenuIcon sx={{ fontSize: 40, color: COLORS.white }} />
        <Drawer
          anchor="right"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Box
            sx={{
              width: '250px',
              height: '100%',
              borderColor: COLORS.white,
              backgroundColor: COLORS.rightBlack
            }}
            role="presentation"
            onClick={() => {
              setOpen(false);
            }}
            onKeyDown={() => {
              setOpen(false);
            }}
          >
            <List>
              {menuList.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton sx={{ mt: '10px' }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ color: COLORS.white, fontSize: '24px' }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
      <Box
        sx={{
          height: '50px',
          backgroundColor: COLORS.rightBlack,
          display: 'flex',
          mb: '30px'
        }}
      >
        {menuList.map((item, index) => (
          <Typography
            key={index}
            sx={{
              height: '28px',
              textAlign: 'center',
              ml: '30px',
              my: 'auto',
              fontSize: '24px',
              color: COLORS.white,
              ...HEADER_FONT,
              textDecoration: 'underline',
              textDecorationColor: COLORS.white
            }}
          >
            {item.text}
          </Typography>
        ))}
      </Box>
    </>
  );
};

import react, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon
} from '@mui/material';
import AbcIcon from '@mui/icons-material/Abc';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import BrushIcon from '@mui/icons-material/Brush';
import MenuIcon from '@mui/icons-material/Menu';

export const DrawerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const MenuList = [
    { catecory: '言語', icon: <AbcIcon />, path: '' },
    { catecory: 'ライブラリ', icon: <LocalLibraryIcon />, path: '' },
    { catecory: 'NFT', icon: <LocalAtmIcon />, path: '' },
    { catecory: 'デザイン', icon: <BrushIcon />, path: '' }
  ];

  const toggleDrawer = (flg?: boolean) => {
    setOpenMenu(flg === undefined ? !openMenu : flg);
  };

  const list = () => {
    return (
      <Box
        sx={{ width: 250 }}
        // role="presentation"
        // onClick={toggleDrawer(false)}
        // onKeyDown={toggleDrawer(false)}
      >
        <List>
          {MenuList.map((item, index) => (
            <Link key={index} href={item.path}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.catecory} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        width: '50px',
        height: '50px'
      }}
    >
      <Button
        onClick={() => {
          toggleDrawer();
        }}
        sx={{ color: '#000' }}
      >
        <Icon sx={{ top: 0, width: '30px', height: '30px' }}>
          <MenuIcon fontSize="large" />
        </Icon>
      </Button>
      <Drawer
        anchor={'left'}
        open={openMenu}
        onClose={() => {
          toggleDrawer();
        }}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

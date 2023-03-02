import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import TopImage from '../../public/top.jpg';
import { Icon } from '@mui/material';
import { DrawerMenu } from '@/components';
import MenuIcon from '@mui/icons-material/Menu';
import { COLORS, HEADER_FONT } from '@/utils/const';
import { Menu } from './Menu';

export const Header = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}></Box>
      <Menu />
      <Box sx={{ height: { xs: 660, md: 770 }, position: 'relative' }}>
        <Image src={TopImage} objectFit="cover" alt="top_image" fill />
        <Typography
          sx={{
            width: '70vw',
            position: 'absolute',
            textAlign: 'center',
            left: 0,
            right: 0,
            top: '40%',
            mx: 'auto',
            color: COLORS.white,
            ...HEADER_FONT,
            fontSize: { xs: 64, md: 96 }
          }}
        >
          Trattoria Saluti
        </Typography>
      </Box>
    </Box>
  );
};

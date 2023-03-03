import type { NextPage } from 'next';
import Image from 'next/image';
import { Box, Divider, Typography } from '@mui/material';
import { Fotter, Header, InfoCard, StoreInformation } from '@/components';
import { COLORS, FONT, FEATURE_CARDS, MENU_CARDS } from '@/utils/const';
import pizzaImage from '@/public/pizza.jpg';

const Home: NextPage = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: COLORS.darkGreen }}>
      <Header />
      <Divider
        variant="middle"
        sx={{
          width: '80vw',
          mx: 'auto',
          my: '30px',
          borderColor: COLORS.darkWhite
        }}
      />
      <Box sx={{ height: { xs: 80, md: 150 }, position: 'relative' }}>
        <Box
          sx={{
            // filter: 'blur(6px)'
            opacity: 0.6
          }}
        >
          <Image src={pizzaImage} objectFit="cover" alt="pizza_image" fill />
        </Box>
        <Typography
          sx={{
            position: 'absolute',
            textAlign: 'center',
            top: '20%',
            right: 0,
            left: 0,
            color: COLORS.white,
            ...FONT,
            fontSize: { xs: 36, md: 48 }
          }}
        >
          Feature
        </Typography>
      </Box>
      {FEATURE_CARDS.map((item, index) => {
        return <InfoCard item={item} key={index} />;
      })}
      <Box>
        <Typography
          sx={{
            mt: '80px',
            textAlign: 'center',
            verticalAlign: 'middle',
            color: COLORS.white,
            ...FONT,
            fontSize: { xs: 36, md: 48 }
          }}
        >
          Menu
        </Typography>
        <Divider
          variant="middle"
          sx={{
            width: { xs: '80vw', md: '20vw' },
            mx: 'auto',
            my: '30px',
            borderColor: COLORS.darkWhite
          }}
        />
        {MENU_CARDS.map((item, index) => {
          return <InfoCard item={item} key={index} />;
        })}
      </Box>
      <StoreInformation />
      <Fotter />
    </Box>
  );
};

export default Home;

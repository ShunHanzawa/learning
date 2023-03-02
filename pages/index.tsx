import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Grid
} from '@mui/material';
import NextImage from 'next/image';
import { ArticleCard } from '../components/ArticleCard';
import {
  Fotter,
  Header,
  CategoryFilter,
  InfoCard,
  StoreInformation
} from '@/components';
import { COLORS, HEADER_FONT, FEATURE_CARDS, MENU_CARDS } from '@/utils/const';
import pizzaImage from '@/public/pizza.jpg';

const Home: NextPage = () => {
  return (
    <Box sx={{ height: '100%', backgroundColor: COLORS.darkGreen }}>
      <Header />
      <Divider
        variant="middle"
        sx={{ my: '30px', borderColor: COLORS.darkWhite }}
      />
      <Box sx={{ height: { xs: 80, md: 150 }, position: 'relative' }}>
        <Box sx={{}}>
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
            ...HEADER_FONT,
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
            mt: '50px',
            textAlign: 'center',
            verticalAlign: 'middle',
            color: COLORS.white,
            ...HEADER_FONT,
            fontSize: { xs: 36, md: 48 }
          }}
        >
          Menu
        </Typography>
        <Divider
          variant="middle"
          sx={{
            width: '80vw',
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

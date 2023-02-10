import Head from 'next/head';
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
import item1 from '../public/item1.jpg';
import { ArticleCard } from '../components/ArticleCard';
import { Top } from '@/components';
import { jsx, css, Global, ClassNames } from '@emotion/react';

const Home: NextPage = () => {
  const cardItems = [
    {
      image: item1.src,
      title: '一つ目',
      detail: '詳細詳細詳細詳細詳細詳細',
      url: ''
    },
    {
      image: item1.src,
      title: '一つ目',
      detail: '詳細詳細詳細詳細詳細詳細',
      url: ''
    },
    {
      image: item1.src,
      title: '一つ目',
      detail: '詳細詳細詳細詳細詳細詳細',
      url: ''
    },
    {
      image: item1.src,
      title: '一つ目',
      detail: '詳細詳細詳細詳細詳細詳細',
      url: ''
    }
  ];

  return (
    <Box sx={{}}>
      <Top />
      <Divider sx={{ width: '80%', m: '0px auto 40px' }} />
      <Box
        sx={{
          width: 'auto',
          height: 'auto'
        }}
      >
        <Grid
          container
          rowSpacing={1}
          spacing={2}
          sx={{
            maxWidth: '900px',
            justifyContent: 'center',
            marginRight: 'auto',
            marginLeft: 'auto'
          }}
        >
          {cardItems.map((item, index) => {
            return (
              <Grid item xs={5} key={index}>
                <ArticleCard
                  image={item.image}
                  title={item.title}
                  detail={item.detail}
                  url={item.url}
                  key={index}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;

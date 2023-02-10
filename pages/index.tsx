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

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

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
  const stringStyle = css`
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
  `;

  return (
    <Box sx={{}}>
      <Top />
      <Box sx={{}}>
        <Divider sx={{ width: '80%', m: '40px auto' }} />
        <Box sx={{ width: 'auto', height: 'auto', mx: 'auto' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            spacing={0}
          >
            {cardItems.map((item, index) => {
              return (
                <Grid item xs={5} key={index} sx={{}}>
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
    </Box>
  );
};

export default Home;

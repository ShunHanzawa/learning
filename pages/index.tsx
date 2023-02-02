import Head from 'next/head';
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
  Grid,
} from '@mui/material';
import TopImage from '../public/top.jpeg';
import NextImage from 'next/image';
import item1 from '../public/item1.jpg';
import { ArticleCard } from '../components/ArticleCard';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Home() {

  const cardItems = [
    {
      image: item1.src,
      title: '一つ目',
      detail: '詳細詳細詳細詳細詳細詳細',
      url: '',
    },
    {
      image: item1.src,
      title: '一つ目',
      detail: '詳細詳細詳細詳細詳細詳細',
      url: '',
    },
    {
      image: item1.src,
      title: '一つ目',
      detail: '詳細詳細詳細詳細詳細詳細',
      url: '',
    },
    {
      image: item1.src,
      title: '一つ目',
      detail: '詳細詳細詳細詳細詳細詳細',
      url: '',
    }
  ]

  return (
    <div>
      {/* <NextImage className="object-contain" src={top} alt='' layout='fill'/> */}
      {/* <image src={top} /> */}
      <Box sx={{ objectFit: 'cover' }}>
        <Image src={TopImage} alt="" width={2200} />
        <Box
          sx={{
            position: 'absolute',
            top: '250px',
            left: '150px',
            fontSize: '50px'
          }}
        >
          Summary of <br/>
          learning content
        </Box>
      </Box>
      <Divider sx={{ width: 1600, m: '40px auto' }} />
      <Box sx={{ width: '80%', mx: 'auto' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={0}>
          {cardItems.map((item, index) => {
          return (
            <Grid item xs={5} key={index} sx={{  }}>
              <ArticleCard image={item.image} title={item.title} detail={item.detail} url={item.url} key={index}/>
            </Grid>
          )
        })}
        </Grid>
      </Box>

    </div>
  );
}

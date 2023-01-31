import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Box, CardMedia } from '@mui/material';
import top from '../public/top.jpg';
import NextImage from 'next/image';

export default function Home() {
  return (
    <div>
      <Box sx={{ height: 500 }}>
        <NextImage className="object-contain" src={top} alt='' layout='fill' />
      </Box>
      {/* {top} */}
      {/* <Box>
      </Box> */}
    </div>
  );
}

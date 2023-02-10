import { Box } from '@mui/material';
import Image from 'next/image';
import TopImage from '../public/top.jpeg';

export const Top = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Box sx={{ width: 'fit', top: 0, height: '100%' }}>
        <Image
          src={TopImage}
          layout="responsive"
          objectFit="contain"
          alt="arrow icon"
        />
      </Box>
      <Box
        sx={{
          position: 'relative',
          fontSize: '30px',
          width: '500px',
          top: '-100px',
          left: '30px',
          '@media screen and (min-width:780px)': {
            fontSize: '50px',
            top: '-150px'
          }
        }}
      >
        Summary of <br />
        learning content
      </Box>
    </Box>
  );
};

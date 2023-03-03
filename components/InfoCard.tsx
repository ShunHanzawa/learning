import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box, Divider, Typography } from '@mui/material';
import { COLORS, FONT } from '@/utils/const';

type Props = {
  item: {
    image: StaticImageData;
    headLine: string;
    detail: string;
  };
};

export const InfoCard: FC<Props> = (props) => {
  const { image, headLine, detail } = props.item;
  return (
    <Box
      sx={{
        height: 'auto',
        width: { xs: '85vw', md: '60vw' },
        mt: '35px',
        mx: 'auto',
        py: { xs: '35px', md: '60px' },
        px: { xs: 0, md: '60px' },
        backgroundColor: COLORS.rightBlack,
        borderRadius: '10px',
        display: { xs: 'block', md: 'flex' }
      }}
    >
      <Box
        sx={{
          height: { xs: '190px', md: '250px' },
          width: { xs: '70vw', md: '25vw' },
          position: 'relative',
          m: 'auto',
          borderRadius: '10px'
        }}
      >
        <Image src={image} objectFit="cover" alt="tomatoes_image" fill />
      </Box>
      <Box
        sx={{
          width: { xs: '70vw', md: '25vw' },
          mx: 'auto'
        }}
      >
        <Typography
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            color: COLORS.white,
            ...FONT,
            fontSize: { xs: 24, md: 32 },
            my: { xs: '15px', md: 0 }
          }}
        >
          {headLine}
        </Typography>
        <Divider variant="middle" sx={{ borderColor: COLORS.black }} />
        <Typography
          sx={{
            color: COLORS.white,
            ...FONT,
            fontSize: 16,
            mx: 'auto',
            mt: '15px',
            lineHeight: '24px'
          }}
        >
          {detail}
        </Typography>
      </Box>
    </Box>
  );
};

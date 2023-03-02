import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box, Divider, Typography } from '@mui/material';
import { COLORS, HEADER_FONT } from '@/utils/const';

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
        height: { xs: 'auto', md: 150 },
        width: { xs: '85vw', md: 400 },
        mt: '35px',
        mx: 'auto',
        backgroundColor: COLORS.rightBlack,
        borderRadius: '10px',
        py: '35px'
      }}
    >
      <Box
        sx={{
          height: { xs: '190px', md: 150 },
          width: { xs: '70vw', md: 400 },
          position: 'relative',
          mx: 'auto',
          borderRadius: '10px'
        }}
      >
        <Image
          src={image}
          objectFit="cover"
          alt="tomatoes_image"
          fill
          // sx={{ backdropFilter: 'blur(3px)' }}
        />
      </Box>
      <Typography
        sx={{
          textAlign: 'center',
          color: COLORS.white,
          ...HEADER_FONT,
          fontSize: { xs: 24, md: 48 },
          my: '15px'
        }}
      >
        {headLine}
      </Typography>
      <Divider variant="middle" sx={{ borderColor: COLORS.black }} />
      <Typography
        sx={{
          textAlign: 'center',
          color: COLORS.white,
          ...HEADER_FONT,
          fontSize: { xs: 16, md: 48 },
          width: { xs: '70vw', md: 400 },
          mx: 'auto',
          mt: '15px',
          lineHeight: '24px'
        }}
      >
        {detail}
      </Typography>
    </Box>
  );
};

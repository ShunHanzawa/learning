import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import barImage from '@/public/bar.jpg';
import { COLORS, STORE_INFORMATION, HEADER_FONT } from '@/utils/const';
import instagramImage from '@/public/sns_icons/instagram_icon.png';
import lineImage from '@/public/sns_icons/line_icon.png';
import twitterImage from '@/public/sns_icons/twitter_icon.png';

export const StoreInformation = () => {
  return (
    <Box sx={{ mt: '50px' }}>
      <Box
        sx={{
          width: '100vw',
          height: 'auto',
          position: 'relative',
          py: '30px'
        }}
      >
        <Image src={barImage} alt="bar_image" fill objectFit="cover" />
        <Box
          sx={{
            height: { xs: 'auto', md: 150 },
            width: { xs: '85vw', md: 400 },
            py: '25px',
            mx: 'auto',
            backgroundColor: COLORS.rightBlack,
            borderRadius: '10px',
            position: 'sticky',
            opacity: 0.8
          }}
        >
          <Typography
            color={COLORS.white}
            sx={{
              fontSize: { xs: 24, md: 32 },
              textAlign: 'center',
              ...HEADER_FONT
            }}
          >
            Store Information
          </Typography>
          {STORE_INFORMATION.map((item, index) => {
            return (
              <Box sx={{ mt: '25px', px: '30px' }} key={index}>
                <Typography
                  color={COLORS.white}
                  sx={{ textAlign: 'center', ...HEADER_FONT }}
                >
                  {item.title}
                </Typography>
                <Typography
                  color={COLORS.white}
                  sx={{ textAlign: 'center', ...HEADER_FONT }}
                >
                  {item.detail}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            height: { xs: 'auto', md: 150 },
            width: { xs: '85vw', md: 400 },
            py: '25px',
            mt: '30px',
            mx: 'auto',
            backgroundColor: COLORS.rightBlack,
            borderRadius: '10px',
            position: 'sticky',
            opacity: 0.8
          }}
        >
          <Typography
            color={COLORS.white}
            sx={{
              fontSize: { xs: 24, md: 32 },
              textAlign: 'center',
              ...HEADER_FONT
            }}
          >
            SNS
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mx: 'auto',
              px: '15vw',
              justifyContent: 'space-around'
            }}
          >
            <Box
              sx={{
                height: { xs: '64px', md: 150 },
                width: { xs: '64px', md: 400 },
                mt: '25px',
                position: 'relative'
              }}
            >
              <Image
                src={lineImage}
                alt="instagram_image"
                fill
                objectFit="cover"
              />
            </Box>
            <Box
              sx={{
                height: { xs: '64px', md: 150 },
                width: { xs: '64px', md: 400 },
                mt: '25px',
                px: '30px',
                position: 'relative'
              }}
            >
              <Image
                src={twitterImage}
                alt="instagram_image"
                fill
                objectFit="cover"
              />
            </Box>
            <Box
              sx={{
                height: { xs: '64px', md: 150 },
                width: { xs: '64px', md: 400 },
                mt: '25px',
                px: '30px',
                position: 'relative'
              }}
            >
              <Image
                src={instagramImage}
                alt="instagram_image"
                fill
                objectFit="cover"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

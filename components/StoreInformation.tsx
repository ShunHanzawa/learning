import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import barImage from '@/public/bar.jpg';
import { COLORS, STORE_INFORMATION, FONT } from '@/utils/const';
import instagramImage from '@/public/sns_icons/instagram_icon.png';
import lineImage from '@/public/sns_icons/line_icon.png';
import twitterImage from '@/public/sns_icons/twitter_icon.png';

export const StoreInformation = () => {
  const snsImages = [instagramImage, lineImage, twitterImage];

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
            height: 'auto',
            width: { xs: '85vw', md: '40vw' },
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
              ...FONT
            }}
          >
            Store Information
          </Typography>
          {STORE_INFORMATION.map((item, index) => {
            return (
              <Box
                sx={{
                  mt: '25px',
                  px: '10%',
                  fontSize: 20,
                  display: { xs: 'bleck', md: 'flex' }
                }}
                key={index}
              >
                <Typography
                  color={COLORS.white}
                  sx={{
                    width: { xs: 'auto', md: '150px' },
                    ml: { xs: 0, md: '20px' },
                    textAlign: { xs: 'center', md: 'left' },
                    ...FONT
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  color={COLORS.white}
                  sx={{ textAlign: 'center', ...FONT }}
                >
                  {item.detail}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            height: 'auto',
            width: { xs: '85vw', md: '40vw' },
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
              ...FONT
            }}
          >
            SNS
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mx: 'auto',
              px: { xs: '15vw', md: '10vw' },
              justifyContent: 'space-around',
              opacity: 1
            }}
          >
            {snsImages.map((image, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    height: { xs: '64px', md: '80px' },
                    width: { xs: '64px', md: '80px' },
                    mt: '25px',
                    px: '30px',
                    position: 'relative'
                  }}
                >
                  <Image src={image} alt="line_image" fill objectFit="cover" />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

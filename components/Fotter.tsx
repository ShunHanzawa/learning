import { Box, Typography } from '@mui/material';
import { COLORS, FONT } from '@/utils/const';

export const Fotter = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.rightBlack, height: '62px' }}>
      <Typography
        sx={{
          textAlign: 'center',
          verticalAlign: 'middle',
          pt: '20px',
          color: COLORS.white,
          fontSize: '12px',
          ...FONT
        }}
      >
        @copy right
      </Typography>
    </Box>
  );
};

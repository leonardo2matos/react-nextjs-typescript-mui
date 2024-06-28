import Image from 'next/image';
import { Box } from '@mui/material';

export default function Page() {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '200px', sm: '300px', md: '400px', lg: '500px' },
        position: 'relative',
        overflow: 'hidden',
        marginTop: 8,

      }}
    >
      <Image
        src="/image/istanbul-backgroundcover.jpg"
        alt="Istanbul Background"
        layout="fill"
        objectFit="cover"
        priority
      />
    </Box>
  );
}

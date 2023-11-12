import { Typography, Box } from '@mui/material';

import './Footer.scss';

function Footer({ footer }) {
  return (
    <Box component='div' className='footer'>
      <Typography className='name'>{footer.name}</Typography>
      <Typography className='title'>{footer.title}</Typography>
    </Box>
  );
}

export default Footer;

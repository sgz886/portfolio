import React from 'react';
import { Button, Typography } from '@mui/material';
import './MyButton.scss';

function MyButton({ href, text, icon }) {
  return (
    <a
      className='link'
      href={href}
      rel='noreferrer'
      target='_blank'
      download='Gordon_Developer.pdf'
    >
      <Button className='myButton' endIcon={icon}>
        <Typography className='text'>{text}</Typography>
      </Button>
    </a>
  );
}
export default MyButton;

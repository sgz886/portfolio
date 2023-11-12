import { useEffect, useState } from 'react';
import {
  Box, Grid, TextField, Typography,
} from '@mui/material';
import './Contact.scss';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import MyButton from '../../components/MyButton/MyButton';
import MyTitle from '../../components/MyTitle/MyTitle';
import SocialLink from '../../components/SocialLink/SocialLink';
import { reqInformation } from '../../api';
import Loading from '../../components/Loading/Loading';

function Contact() {
  const [information, setInformation] = useState(null);

  const getInformation = async () => {
    const resInformation = await reqInformation();
    setInformation(resInformation);
  };

  useEffect(() => {
    getInformation();
  }, []);

  return information ? (
    <Grid container spacing={4} className='contact' justify='space-between'>
      {/* Contact Form */}
      <Grid item container xs={12} sm={6} spacing={4} className='form'>
        <Grid item xs={12} className='title'>
          <MyTitle title='contact form' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant='standard' fullWidth name='name' label='Name' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant='standard' fullWidth name='email' label='Email' />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='standard'
            fullWidth
            name='message'
            label='Message'
            rows={3}
          />
        </Grid>
        <Grid item xs={12} className='button'>
          <MyButton
            text='Contact'
            icon={<ContactMailSharpIcon />}
            href='mailto:sgz886@gmail.com'
          />
        </Grid>
      </Grid>

      {/* Contact Information */}
      <Grid item xs={12} sm={6} className='information'>
        <Grid item xs={12} className='title title-contact-info'>
          <MyTitle title='contact information' />
        </Grid>
        <Grid item xs={12}>
          <Box component='div'>
            <div className='item'>
              <Typography className='item_title'>Address: </Typography>
              {information.sideBar.address}
            </div>
            <div className='item'>
              <Typography className='item_title'>Phone: </Typography>
              {information.sideBar.phone}
            </div>
            <div className='item'>
              <Typography className='item_title'>Job: </Typography>
              {information.sideBar.title}
            </div>
            <div className='item'>
              <Typography className='item_title'>E-mail: </Typography>
              {information.sideBar.email}
            </div>
            <SocialLink socials={information.socials} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Loading />
  );
}

export default Contact;

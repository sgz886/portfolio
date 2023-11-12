import React from 'react';
import SendIcon from '@mui/icons-material/Send';

import './Header.scss';
import MyButton from '../MyButton/MyButton';
import SocialLink from '../SocialLink/SocialLink';
import HeaderLeftNav from '../HeaderLeftNav/HeaderLeftNav';

function Header({ socials }) {
  return (
    <div className='header'>
      <HeaderLeftNav />
      <div className='header_right'>
        <SocialLink socials={socials} />
        <MyButton
          text='hire me'
          icon={<SendIcon />}
          href='mailto:sgz886@gmail.com'
        />
      </div>
    </div>
  );
}
export default Header;

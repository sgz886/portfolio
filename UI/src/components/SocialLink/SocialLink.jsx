import React from 'react';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './SocialLink.scss';

function SocialLink({ socials }) {
  const icons = {
    MyGitHub: <GitHubIcon />,
    MyLinkedIn: <LinkedInIcon />,
  };

  return (
    <div className='icons d-inline-block d-md-none d-xl-inline-block'>
      {Object.keys(socials).map((key, index) => (
        <Link
          key={index}
          className='icon'
          href={socials[key].link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {icons[socials[key].text]}
        </Link>
      ))}
    </div>
  );
}
export default SocialLink;

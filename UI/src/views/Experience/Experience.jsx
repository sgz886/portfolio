import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './Experience.scss';
import MyTitle from '../../components/MyTitle/MyTitle';
import MyTimeLineItem from '../../components/MyTimeLine/MyTimeLine';
import { reqExperience } from '../../api';
import Loading from '../../components/Loading/Loading';

function Information() {
  const [experience, setExperience] = useState(null);

  const getExperience = async () => {
    const resExperience = await reqExperience();
    setExperience(resExperience);
  };

  useEffect(() => {
    getExperience();
  }, []);

  return experience ? (
    <Box component='div' className='experience'>
      <MyTitle title='Working History' className='title' />
      {experience.map((item, index) => (
        <Box key={index} component='div' className='card'>
          <div className='card_content'>
            <div className='title'>
              <span className='job'>{item.title}</span>
              <span className='employer'>{item.employer}</span>
              <span className='time'>{item.time}</span>
              <Typography className='des'>{item.description}</Typography>
            </div>
            <div className='timeline'>
              <Typography className='resp'>Job responsibilities:</Typography>
              {item.responsibilities.map((subItem, subIndex) => (
                <MyTimeLineItem
                  key={subIndex}
                  isLastItem={
                    subIndex === item.responsibilities.length - 1
                  }
                  subtitle={
                    <Typography style={{ whiteSpace: 'pre-line' }} className='resp_item'>{subItem}</Typography>
                  }
                />
              ))}
            </div>
          </div>
        </Box>
      ))}
    </Box>
  ) : (
    <Loading />
  );
}
export default Information;

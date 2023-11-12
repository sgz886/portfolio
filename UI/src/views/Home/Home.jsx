import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Grid, Paper,
} from '@mui/material';
import './Home.scss';
import MyTitle from '../../components/MyTitle/MyTitle';
import { reqSkill } from '../../api';
import Loading from '../../components/Loading/Loading';

function Information() {
  const [skill, setSkill] = useState(null);

  const getSkill = async () => {
    const resSkill = await reqSkill();
    setSkill(resSkill);
  };

  useEffect(() => {
    getSkill();
  }, []);

  return skill ? (
    <Box component='div' className='home'>
      <div className='card'>
        <MyTitle title='about me' />
        <div className='card_content'>
          {skill.aboutMe.map((item, index) => (
            <Typography className='card_item' key={index}>
              {item}
            </Typography>
          ))}
        </div>
      </div>
      <Grid container className='skills'>
        <MyTitle title='Technical Skills' />
        <Grid
          container
          justify='space-around'
          spacing={4}
          className='paper_container'
        >
          {skill.skills.map((item, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <Paper elevation={1} key={index} className='paper'>
                <Typography className='paper_title'>{item.title}</Typography>
                {item.content
                  ? item.content.map((element, childIndex) => (
                    <Typography key={childIndex} className='paper_item'>
                      {element}
                    </Typography>
                  ))
                  : null}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Loading />
  );
}
export default Information;

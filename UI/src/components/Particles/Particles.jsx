import React from 'react';
import { makeStyles } from '@mui/material/styles';

import MUIParticles from 'react-tsparticles';

const useStyles = makeStyles(() => ({
  particles: {
    position: 'absolute',
    top: '-30px',
    left: 0,
    opacity: 0.3,
    width: '100vw',
    height: '100vh',
    zIndex: '-99',
  },
}));

function Particles() {
  const classes = useStyles();
  return (
    <MUIParticles
      className={classes.particles}
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 600,
            },
          },
          shape: {
            type: 'triangle',
            stroke: {
              width: 10,
              color: '#FF4500',
            },
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 6,
              size_min: 0.5,
              sync: false,
            },
          },
        },
      }}
    />
  );
}

export default Particles;

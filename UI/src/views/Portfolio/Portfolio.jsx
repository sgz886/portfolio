import React, { useEffect, useState, Fragment } from 'react';
import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Grow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Portfolio.scss';
import MyTitle from '../../components/MyTitle/MyTitle';
import { reqPortfolio } from '../../api';
import Loading from '../../components/Loading/Loading';

function Portfolio() {
  const [tabValue, setTabValue] = useState('All');
  const [projectDialog, setProjectDialog] = useState('');

  const [portfolio, setPortfolio] = useState(null);

  const getPortfolio = async () => {
    const resPortfolio = await reqPortfolio();
    setPortfolio(resPortfolio);
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  function openDialog() {
    return (
      <Dialog open={projectDialog} onClose={() => setProjectDialog('')}>
        <DialogTitle onClose={() => setProjectDialog('')}>
          {projectDialog.title}
        </DialogTitle>
        <DialogActions>
          <Carousel>
            {projectDialog?.images?.map((image, index) => (
              <div key={index}>
                <img src={image.url} alt='' />
                <p className='legend'>{image.title}</p>
              </div>
            ))}
          </Carousel>
        </DialogActions>
        <DialogContent>{projectDialog.description}</DialogContent>
      </Dialog>
    );
  }

  return portfolio ? (
    <Grid container className='section'>
      {/* title */}
      <Grid item className='title'>
        <MyTitle title='Portfolio' />
      </Grid>

      {/* tabs */}
      <Grid item>
        <Tabs
          value={tabValue}
          indicatorColor='white'
          className='custom_tabs'
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label='All'
            value='All'
            className={
              tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'
            }
          />
          {[...new Set(portfolio.map((item) => item.tag))].map((tag, index) => (
            <Tab
              key={index}
              label={tag}
              value={tag}
              className={
                tag === tabValue ? 'customTabs_item active' : 'customTabs_item'
              }
            />
          ))}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={8} justify='space-evenly'>
          {portfolio.map((project, index) => (
            <Fragment key={index}>
              {tabValue === project.tag || tabValue === 'All' ? (
                <Grid item xs={12} md={6}>
                  <Grow in timeout={1000}>
                    <Card
                      className='card'
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia className='img' image={project.image} />
                        <CardContent>
                          <Typography gutterBottom className='title'>
                            {project.title}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='textSecondary'
                            className='portfolio_des'
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                  {openDialog()}
                </Grid>
              ) : null}
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Loading />
  );
}
export default Portfolio;

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import LaptopMacSharpIcon from '@mui/icons-material/LaptopMacSharp';
import './Projects.scss';
import MyTitle from '../../components/MyTitle/MyTitle';
import MyTimeLineItem, {
  MyTimeLineHeader,
} from '../../components/MyTimeLine/MyTimeLine';
import Loading from '../../components/Loading/Loading';
import { reqProject } from '../../api';

function Information() {
  const [project, setProject] = useState(null);

  const getProject = async () => {
    const resProject = await reqProject();
    setProject(resProject);
  };

  useEffect(() => {
    getProject();
  }, []);

  return project ? (
    <Box component='div' className='timeline'>
      <MyTimeLineHeader
        className='timeline_header'
        icon={<LaptopMacSharpIcon />}
        title={<MyTitle title='projects' />}
        text=''
      />
      {project.map((item, index) => (
        <MyTimeLineItem
          key={index}
          isLastItem={index === project.length - 1}
          title={(
            <Typography className='item_title'>
              {item.project}
              <a href={item.website} className='item_website'>
                {item.website}
              </a>
            </Typography>
          )}
          subtitle={
            <Typography className='item_subtitle'>{item.des}</Typography>
          }
          text={(
            <div className='pro_text'>
              <ul className='pro_activities_ul'>
                Project Activities:
                {item.activities.map((subItem, subIndex) => (
                  <li className='pro_activities_li' key={subIndex}>
                    {subItem}
                  </li>
                ))}
              </ul>
              <Typography className='pro_tech'>Tech Stacks:</Typography>
              <Typography className='pro_stack'>{item.tech_stacks}</Typography>
            </div>
          )}
        />
      ))}
    </Box>
  ) : (
    <Loading />
  );
}
export default Information;

import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GetAppIcon from '@mui/icons-material/GetApp';

import './SideBar.scss';
import MyTimeLineItem, {
  MyTimeLineHeader,
} from '../MyTimeLine/MyTimeLine';
import MyButton from '../MyButton/MyButton';

function SideBar({ sideBar, avatar, CVHref }) {
  return (
    <Box component='div' className='portrait container_shadow'>
      <div className='portrait_name'>
        <Typography className='name'>{sideBar.name}</Typography>
        <Typography className='title'>{sideBar.title}</Typography>
      </div>
      <img className='portrait_img' src={avatar} alt={sideBar.name} />
      <div className='timeline'>
        <MyTimeLineHeader icon={<PersonIcon />} title='' text='' />
        {Object.keys(sideBar).map((key, index) => (
          <MyTimeLineItem
            key={index}
            isLastItem={
              index === Object.keys(sideBar).length - 1
            }
            title={(
              <div className='item_text'>
                <Typography className='item_title'>{key}:</Typography>
                {sideBar[key]}
              </div>
            )}
          />
        ))}
      </div>
      <div className='portrait_button'>
        <MyButton icon={<GetAppIcon />} text='Download Cv' href={CVHref} />
      </div>
    </Box>
  );
}
export default SideBar;

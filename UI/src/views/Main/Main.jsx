import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './Main.scss';

import routeList from '../../routeList/routeList';

function Main() {
  return (
    <Box className='Main'>
      <Routes>
        {routeList.length
          ? routeList.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={<item.component />}
            />
          ))
          : null}
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </Box>
  );
}
export default Main;

import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, Menu } from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import HomeIcon from '@mui/icons-material/Home';
import routeList from '../../routeList/routeList';
import './HeaderLeftNav.scss';

function HeaderLeftNav() {
  const location = useLocation();

  // const navigate = useNavigate();
  // const params = useParams();

  const refreshPath = location.pathname;
  const [currentPath, setCurrentPath] = useState(refreshPath || '/home');
  const [anchorEl, setAnchorEl] = useState(null);

  function getNavButton(item) {
    return (
      <Button
        className='button'
        onClick={() => {
          setCurrentPath(item.path);
        }}
      >
        {item.name}
      </Button>
    );
  }

  function getMenuButton(item) {
    return (
      <Button
        className='button_menu_item'
        onClick={() => {
          setCurrentPath(item.path);
          setAnchorEl(null);
        }}
      >
        {item.name}
      </Button>
    );
  }

  return (
    <div className='header_nav_bar'>
      {/* Navbar(home) */}
      <NavLink to='/home'>
        <Button
          className='button_home'
          endIcon={<HomeIcon />}
          onClick={() => {
            setCurrentPath('/home');
          }}
        />
      </NavLink>
      {/* Navbar(except home) */}
      <div className='d-none d-md-inline-block'>
        {routeList.length
          ? routeList.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={`nav_link ${
                item.path === currentPath ? 'active' : null
              }`}
            >
              {item.icon ? null : getNavButton(item)}
            </NavLink>
          ))
          : null}
      </div>
      {/* NaviDrawer: the burger menu in mobile mode */}
      <div className='header_nav_drawer d-inline-block d-md-none'>
        <Button
          className='button_anchor'
          onClick={(event) => setAnchorEl(event.currentTarget)}
          endIcon={<MenuSharpIcon />}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          className='button_menu'
        >
          {routeList.length
            ? routeList.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={`nav_link ${
                  item.path === currentPath ? 'active' : null
                }`}
              >
                {item.icon ? null : getMenuButton(item)}
              </NavLink>
            ))
            : null}
        </Menu>
      </div>
    </div>
  );
}

export default HeaderLeftNav;

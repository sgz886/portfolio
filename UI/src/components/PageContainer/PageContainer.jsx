import { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../../views/Main/Main';
import { reqInformation } from '../../api';
import Loading from '../Loading/Loading';

function Particles() {
  const [information, setInformation] = useState(null);

  const getInformation = async () => {
    const resInformation = await reqInformation();
    setInformation(resInformation);
  };

  useEffect(() => {
    getInformation();
  }, []);

  return information ? (
    <>
      <div className='side-bar col-xl-3 col-lg-4'>
        <SideBar
          sideBar={information.sideBar}
          avatar={information.avatar}
          CVHref={information.CVHref}
        />
      </div>
      <div className='app_right col-xl-9 col-lg-8'>
        <div className='header container_shadow'>
          <Header socials={information.socials} />
        </div>
        <div className='main container_shadow'>
          <Main />
        </div>
        <div className='footer container_shadow'>
          <Footer footer={information.sideBar} />
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}
export default Particles;

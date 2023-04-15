import '../style/components/Banner.scss';
import { useLocation } from 'react-router-dom';

const Banner = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/About';

  return (
    <div className={`banner ${isAboutPage ? 'banner_about' : 'banner_home'}`}>
      {isAboutPage ? null : <p>Chez vous, partout et ailleurs</p>}
    </div>
  );
};

export default Banner;

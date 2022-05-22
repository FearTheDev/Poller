import { FaPoll } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pollerLogoStyle from './pollerLogo.module.scss';

const PollerLogo = () => {
  return (
    <Link to="/">
      <span className={pollerLogoStyle.logo}>
        <FaPoll /> Poller
      </span>
    </Link>
  );
};

export default PollerLogo;

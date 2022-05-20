import { FaPoll } from 'react-icons/fa';
import pollerLogoStyle from './pollerLogo.module.scss';

const PollerLogo = () => {
  return (
    <span className={pollerLogoStyle.logo}>
      <FaPoll /> Poller
    </span>
  );
};

export default PollerLogo;

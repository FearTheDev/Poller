import { TiWarning } from 'react-icons/ti';
import restrictedStyle from './restricted.module.scss';

const Restricted = () => {
  return (
    <div className={restrictedStyle.container}>
      <TiWarning className={restrictedStyle.icon} />
      <h1>Restricted Area</h1>
      <span>You are not authorized to view this page.</span>
      <p>Please login, to access this area.</p>
    </div>
  );
};

export default Restricted;

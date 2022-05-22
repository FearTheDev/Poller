import loaderStyle from './loader.module.scss';
import { BsShieldLockFill } from 'react-icons/bs';

const Loader = () => {
  return (
    <div className={loaderStyle.container}>
      <div className={loaderStyle.loader}>
        <BsShieldLockFill className={loaderStyle.spinner} />
      </div>

      <h1> Loading... </h1>

      <p>
        <span>
          If you are seeing this message for more than a few seconds, please
          refresh the page.
        </span>
      </p>
    </div>
  );
};

export default Loader;

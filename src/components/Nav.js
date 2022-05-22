import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PollerLogo from './PollerLogo';
import { MdOutlineLogout, MdOutlineLogin } from 'react-icons/md';
import navStyle from './nav.module.scss';

const Nav = ({ isLoggedIn, user, userAvatar }) => {
  return (
    <nav className={navStyle.container}>
      <ul>
        <li>
          <PollerLogo />
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/add">New Poll</Link>
            </li>
          </>
        ) : null}
      </ul>
      {isLoggedIn ? (
        <div className={navStyle.user}>
          <p>{user}</p>
          <div className={navStyle.avatar}>
            <img src={userAvatar} alt={`${user}'s avatar`} />
          </div>
          <Link className={navStyle.navBtn} to="/logout">
            <MdOutlineLogout /> Logout
          </Link>
        </div>
      ) : (
        <Link to="/login" className={navStyle.navBtn}>
          <MdOutlineLogin /> Login
        </Link>
      )}
    </nav>
  );
};

const mapStateToProps = ({ auth, users }) => {
  return {
    isLoggedIn: auth.isLoggedIn,
    user: auth.user,
    userAvatar: users[auth.user]?.avatarURL,
  };
};

export default connect(mapStateToProps)(Nav);

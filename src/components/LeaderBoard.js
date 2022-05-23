import { connect } from 'react-redux';
import leaderboardStyle from './leaderboard.module.scss';
import Loader from './Loader';
const Leaderboard = (props) => {
  const { users, loading } = props;

  const renderLeaderboard = () => {
    return (
      <div className={leaderboardStyle.container}>
        <div className={leaderboardStyle.champion}>
          <p className={leaderboardStyle.championTitle}>Top Poller</p>
          <img
            className={leaderboardStyle.championAvatar}
            src={users[0].avatarURL}
            alt={`${users[0].name}'s avatar`}
          />
          <p className={leaderboardStyle.championName}>{users[0].name}</p>
        </div>
        <ul className={leaderboardStyle.leaderboardList}>
          <li className={leaderboardStyle.leaderboardItem_header}>
            <p className={leaderboardStyle.leaderboardItem__rank_header}>
              Rank
            </p>
            <p className={leaderboardStyle.leaderboardItem__user_header}>
              User
            </p>
            <p className={leaderboardStyle.leaderboardItem__questions_header}>
              Polls Created
            </p>
            <p className={leaderboardStyle.leaderboardItem__answers_header}>
              Polls Voted
            </p>
          </li>
          {users.map((user, index) => (
            <li className={leaderboardStyle.leaderboardItem} key={user.id}>
              <p className={leaderboardStyle.leaderboardItem__rank}>
                {index + 1}
              </p>

              <div className={leaderboardStyle.leaderboardItem__user}>
                <img
                  className={leaderboardStyle.leaderboardItem__user__avatar}
                  src={user.avatarURL}
                  alt={`${user.name}'s avatar`}
                />
                <p>{user.name}</p>
              </div>
              <p className={leaderboardStyle.leaderboardItem__questions}>
                {user.questions.length}
              </p>
              <p className={leaderboardStyle.leaderboardItem__answers}>
                {Object.keys(user.answers).length}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return loading ? <Loader /> : renderLeaderboard();
};

const mapStateToProps = ({ users, loading }) => ({
  users: Object.values(users)
    .map((user) => ({
      ...user,
    }))
    .sort(
      (a, b) =>
        b.questions.length +
        Object.values(b.answers).length -
        (a.questions.length + Object.values(a.answers).length)
    ),

  loading: loading,
});

export default connect(mapStateToProps)(Leaderboard);

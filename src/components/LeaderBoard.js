import { connect } from 'react-redux';
import leaderboardStyle from './leaderboard.module.scss';
import Loader from './Loader';
const Leaderboard = (props) => {
  const { users, loading } = props;

  const renderLeaderboard = () => {
    return (
      <div className={leaderboardStyle.container}>
        <p>Leaderboard</p>
        <div className={leaderboardStyle.champion}>
          <img
            className={leaderboardStyle.championAvatar}
            src={users[0].avatarURL}
            alt={`${users[0].name}'s avatar`}
          />
          <p className={leaderboardStyle.championName}>{users[0].name}</p>
        </div>
        <ul className={leaderboardStyle.leaderboardList}>
          {users.map((user) => (
            <li className={leaderboardStyle.leaderboardItem} key={user.id}>
              <p className={leaderboardStyle.points}>
                {user.questions.length + Object.values(user.answers).length}
              </p>

              <div className={leaderboardStyle.user}>
                <img
                  className={leaderboardStyle.userAvatar}
                  src={user.avatarURL}
                  alt={`${user.name}'s avatar`}
                />
                <p>{user.name}</p>
              </div>
              <div className={leaderboardStyle.userStats}>
                <p className={leaderboardStyle.userQuestions}>
                  {user.questions.length}
                </p>
                <p className={leaderboardStyle.userAnswers}>
                  {Object.keys(user.answers).length}
                </p>
              </div>
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

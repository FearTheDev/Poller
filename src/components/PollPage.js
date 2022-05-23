import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import styles from './pollpage.module.scss';

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = ({ question, users, user, loading }) => {
  const navigate = useNavigate();

  if (question === undefined) {
    navigate('/missing');
  }

  if (loading) {
    return <Loader />;
  }

  if (
    question.optionOne.votes.includes(user) ||
    question.optionTwo.votes.includes(user)
  ) {
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;

    const totalVotes = optionOneVotes + optionTwoVotes;

    const optionOnePercentage = (optionOneVotes / totalVotes) * 100;
    const optionTwoPercentage = (optionTwoVotes / totalVotes) * 100;

    const winningPercentage =
      optionOnePercentage > optionTwoPercentage
        ? optionOnePercentage
        : optionTwoPercentage;

    const losingPercentage =
      optionOnePercentage < optionTwoPercentage
        ? optionOnePercentage
        : optionTwoPercentage;

    const winningOption =
      optionOnePercentage > optionTwoPercentage
        ? question.optionOne
        : question.optionTwo;

    const losingOption =
      optionOnePercentage < optionTwoPercentage
        ? question.optionOne
        : optionOnePercentage === optionTwoPercentage
        ? question.optionOne
        : question.optionTwo;

    const hasWinner = optionOnePercentage !== optionTwoPercentage;

    return (
      <div className={styles.container}>
        <div className={styles.pollResult}>
          <div className={styles.poll}>
            <div className={styles.poll__question}>
              <h1>{question.author}</h1>
              <img
                className={styles.authorAvatar}
                src={users[question.author].avatarURL}
                alt="avatar"
              />
              <h2>Would you rather</h2>

              <div className={styles.poll__question__votes}>
                <p className={styles.poll__question__votes_text}>
                  {question.optionOne.text}
                </p>
                or
                <p className={styles.poll__question__votes_text}>
                  {question.optionTwo.text}
                </p>
              </div>
            </div>
          </div>
          <h1>Winning Option</h1>
          <h2>{hasWinner ? winningOption.text : 'Draw'}</h2>
          <div
            style={{
              background: '#f5f5f5',
              border: '1px solid rgba(0, 0, 0, 0.25)',
              width: '100%',
              height: '35px',
              position: 'relative',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(0deg, #ad1 0%, #9c0 80%)',
                borderRight: '1px solid rgba(0, 0, 0, 0.15)',
                height: '100%',
                width: `${winningPercentage}%`,
              }}
            ></div>
          </div>
          <div className={styles.winningResult}>
            <strong>{Math.round(winningPercentage)}%</strong> of people voted
            for <strong>{winningOption.text}</strong>
          </div>
          <div className={styles.losingResult}>
            <strong>{Math.round(losingPercentage)}%</strong> of people voted for{' '}
            <strong>{losingOption.text}</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.poll}>
        <div className={styles.poll__question}>
          <h1>{question.author}</h1>
          <img
            className={styles.authorAvatar}
            src={users[question.author].avatarURL}
            alt="avatar"
          />
          <h2>Would you rather</h2>
          <div className={styles.poll__question__votes}>
            <button className={styles.poll__button}>
              <p className={styles.poll__question__options__option__text}>
                {question.optionOne.text}
              </p>
            </button>
            or
            <button className={styles.poll__button}>
              <p className={styles.poll__question__options__option__text}>
                {question.optionTwo.text}
              </p>
            </button>
          </div>
        </div>
      </div>
      <span>Cast your vote to help your choice win!</span>
    </div>
  );
};

const mapStateToProps = ({ users, loading, auth, questions }, props) => {
  const { id } = props.router.params;

  return {
    user: auth.user,
    users: users,
    question: questions[id],
    loading,
  };
};

export default withRouter(connect(mapStateToProps)(PollPage));

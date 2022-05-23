import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

import dashboardStyles from './dashboard.module.scss';

const Dashboard = (props) => {
  const { loading, questions, users, user } = props;

  console.log('TESTING DASHBOARD: ', loading, questions, user);

  useEffect(() => {
    document.title = 'Dashboard - Poller';
  }, []);

  if (props.loading) {
    return <Loader />;
  }

  return (
    <div className={dashboardStyles.container}>
      <h1>{`Welcome back, ${
        users[user].name.split(' ')[0]
      }! Be sure to check out the latest polls!`}</h1>
      <div className={dashboardStyles.questionsWrapper}>
        <div className={dashboardStyles.questionsUnanswered}>
          <h2>Available Polls</h2>
          <ul className={dashboardStyles.questionsList}>
            {questions && questions.length > 0
              ? questions
                  .filter((question) => {
                    return question.optionOne.votes.includes(user) === true ||
                      question.optionTwo.votes.includes(user) === true
                      ? false
                      : true;
                  })
                  .map((question) => (
                    <li key={question.id}>
                      <div className={dashboardStyles.question}>
                        <div className={dashboardStyles.questionText}>
                          <span className={dashboardStyles.questionAuthor}>
                            {'Creator'}
                          </span>
                          <p>{question.author}</p>
                          <h3>Would you rather</h3>
                          <p>{question.optionOne.text}</p>
                          <p>or</p>
                          <p>{question.optionTwo.text}</p>
                        </div>
                        <Link
                          to={`/polls/${question.id}`}
                          className={dashboardStyles.questionButton}
                        >
                          View
                        </Link>
                      </div>
                    </li>
                  ))
              : null}
          </ul>
        </div>

        <div className={dashboardStyles.questionsAnswered}>
          <h2>Completed Polls</h2>
          <ul className={dashboardStyles.questionsList}>
            {questions && questions.length > 0
              ? questions
                  .filter((question) => {
                    return question.optionOne.votes.includes(user) === false &&
                      question.optionTwo.votes.includes(user) === false
                      ? false
                      : true;
                  })
                  .map((question) => (
                    <li key={question.id}>
                      <div className={dashboardStyles.question}>
                        <div className={dashboardStyles.questionText}>
                          <span className={dashboardStyles.questionAuthor}>
                            {'Creator'}
                          </span>
                          <p>{question.author}</p>
                          <h3>Would you rather</h3>
                          <p>{question.optionOne.text}</p>
                          <p>or</p>
                          <p>{question.optionTwo.text}</p>
                        </div>
                        <Link
                          to={`/polls/${question.id}`}
                          className={dashboardStyles.questionButton}
                        >
                          View
                        </Link>
                      </div>
                    </li>
                  ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    questions: Object.keys(state.questions).map((key) => state.questions[key]),
    user: state.auth.user,
    users: state.users,
  };
};

export default connect(mapStateToProps)(Dashboard);

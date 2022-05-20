import React, { useEffect } from 'react';
import landingStyle from './landing.module.scss';
import {
  SiRedux,
  SiJest,
  SiReact,
  SiReactrouter,
  SiGithub,
} from 'react-icons/si';
const Landing = () => {
  useEffect(() => {
    document.title = 'Landing - Poller';
  }, []);

  return (
    <div className={landingStyle.container}>
      <h2>Welcome to Poller</h2>
      <p>
        Poller is a project created by Johnathan Shoff (FearTheDev) as a final
        project submission for my "React Nanodegree" program provided by
        Udacity. It utilizes a variety of different libraries and frameworks to
        create a fully functional application. The application allows the user
        to login, create polls, vote on polls, and view the results of the
        polls. But the most prominent feature of the application is that there
        is a leaderboard that shows who is interacting with the application the
        most.
      </p>

      <h3>Technology</h3>

      <div className={landingStyle.tech}>
        <div className={landingStyle.techWrapper}>
          <div className={landingStyle.techItem}>
            <SiRedux className={landingStyle.icon} />
            <p>Redux</p>
          </div>
          <div className={landingStyle.techItem}>
            <SiJest className={landingStyle.icon} />
            <p>Jest</p>
          </div>
          <div className={landingStyle.techItem}>
            <SiReact className={landingStyle.icon} />
            <p>React</p>
          </div>
          <div className={landingStyle.techItem}>
            <SiReactrouter className={landingStyle.icon} />
            <p>React Router</p>
          </div>
        </div>
      </div>

      <div className={landingStyle.source}>
        <a
          href="https://github.com/FearTheDev/Poller"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the source code on{' '}
          <span>
            <SiGithub /> GitHub
          </span>
        </a>
      </div>
    </div>
  );
};

export default Landing;

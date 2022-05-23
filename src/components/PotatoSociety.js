import { Link } from 'react-router-dom';

const PotatoSociety = () => {
  return (
    <div className="potato-society">
      <h1>Potato Society</h1>
      <p>
        Welcome to the hidden potato society, not sure how you got here but you
        are truly special.
      </p>
      <p>Seriously.. who chooses to navigate to a potato path?</p>
      <p>Don't worry your secret is safe with me.</p>

      <div className="potato-society-image">
        <img
          src="https://media.giphy.com/media/auJjZlb3h1Ga4/giphy.gif"
          alt="potato"
        />
      </div>

      <p>Thanks for visiting!</p>
      <Link to="/">Return to the dashboard</Link>
    </div>
  );
};

export default PotatoSociety;

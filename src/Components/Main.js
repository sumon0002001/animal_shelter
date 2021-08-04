import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import DelayLink from 'react-delay-link';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import icon from '../ui/placeholder2.png';
import placeholder from '../ui/placeholder.jpg';
import shutdown from '../ui/shutdown.png';
import card from '../ui/cat.gif';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from './Footer';
import { fetchCats, logOut } from '../Actions/action';

const Main = ({ user, userTest, users }) => {
  if (user.username === undefined) {
    // eslint-disable-next-line no-param-reassign
    user = userTest;
  }
  const dispatch = useDispatch();
  const clearState = () => {
    dispatch(logOut(''));
  };
  useEffect(() => {
    dispatch(fetchCats());
    // eslint-disable-next-line
  }, []);
  return (
    <main>
      <section className="header-container">
        <div className="d-flex px-3 px-md-5 py-3 justify-content-between w-100">
          <div>
            <Link key={Math.random()} to="/" className="d-flex flex-column align-items-center">
              <img src={icon} width="75" alt="icon" className="header-icon" />
              <h3 className="text-white">Neko Shelter</h3>
            </Link>
          </div>
          <div className="main-profile-div">
            <div className="d-flex align-items-center">
              <div className="flex-right-header my-3">
                <Link className="main-username" to={{ pathname: `Profile/${user.id}`, state: { user } }}>
                  <img src={placeholder} width="25" alt="icon" className="user-icon" />
                  <strong className="main-username">{user.username}</strong>
                </Link>
              </div>
              <DelayLink delay={100} clickAction={() => clearState()} replace={false}>
                <div className="icon-tint" role="button" aria-hidden="true">
                  <img src={shutdown} alt="shutdown" />
                </div>
              </DelayLink>
            </div>
          </div>
        </div>
        <div className="header">
          <h1 className="text-white text-center">
            HELP MAKING THE WORLD
            <br />
            {' '}
            BETTER PLACE FOR KITTENS
          </h1>
          <div className="header-btn">
            <Link key={Math.random()} to="/Cats" className="save-cat-link">
              <button type="button" className="save-cat-btn">SAVE A CAT</button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center header-grid">Adopt a kitten Now!</h1>
        <div className="grid-card">
          <div className="grid-left">
            <h3>
              “The smallest feline is a masterpiece.”
              <br />
              {' '}
              <span className="said"> – Leonardo da Vinci</span>
            </h3>
            <h3>
              “Kittens are angels with whiskers.”
              <br />
              {' '}
              <span className="said"> – Alexis Flora Hope</span>
            </h3>
            <h3>
              “Cats
              <strong className="text-danger"> choose us</strong>
              ; we don’t own them.”
              <br />
              {' '}
              <span className="said">– Kristin Cast</span>
            </h3>
            <div className="grid-left-btn">
              <Link to="/Cats" className="save-cat-link">
                <button type="button" className="grid-left-cat-btn">Get Chosen By A Cat</button>
              </Link>
            </div>
          </div>
          <div className="grid-right">
            <img src={card} alt="cat" />
          </div>
        </div>
      </section>
      <Carousel autoPlay interval={5000} infiniteLoop className="bg-custom py-5" showThumbs={false}>
        {users !== null
          ? users.map((user) => (
            <div key={user.id} className="d-flex flex-column">
              <Link key={user.id} to={{ pathname: `Profile/${user.id}`, state: { user } }} style={{ textDecoration: 'none', color: 'white' }}>
                <h2 className="color-custom">{user.username}</h2>
                <img src={placeholder} alt="placeholder" className="user-img" />
              </Link>
            </div>
          ))
          : null}
      </Carousel>
      <Footer />
    </main>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
  users: state.usersReducer,
});

Main.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  userTest: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.number,
  }),
  users: PropTypes.arrayOf(PropTypes.object),
};
Main.defaultProps = {
  users: [],
  userTest: undefined,
};
export default connect(mapStateToProps, null)(Main);

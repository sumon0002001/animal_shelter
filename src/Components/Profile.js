/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import {
  useLocation, Link,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import DelayLink from 'react-delay-link';
import { connect, useDispatch } from 'react-redux';
import {
  favLoading as favLoader, fetchFavs, delFav, logOut, tempSuccess, addFavourite,
} from '../Actions/action';
import icon from '../ui/placeholder2.png';
import placeholder from '../ui/placeholder.jpg';
import shutdown from '../ui/shutdown.png';
import catIMG1 from '../ui/cat.jpg';
import catIMG2 from '../ui/cat1.jpg';
import catIMG3 from '../ui/cat2.jpg';
import Footer from './Footer';
import me from '../ui/me.png';

const Profile = ({
  user,
  isFavLoading,
  userFavourites,
  tempFavourites,
  cats,
  currentUser,
  userTest,
  catsTest,
  userFavouritesTest,
  boolTest = true,
}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const clearState = () => {
    dispatch(logOut(''));
  };
  const catsArray = [catIMG1,
    catIMG2,
    catIMG3,
  ];
  user = userTest;
  if (currentUser.username === undefined) {
    currentUser = userTest;
  }
  if (user === {} || user === undefined) {
    user = location.state.user;
  }
  if (cats[0] === undefined) {
    cats = catsTest;
  }
  if (userFavourites[0] === undefined && userTest !== undefined) {
    userFavourites.push(userFavouritesTest);
  }
  useEffect(() => {
    if (currentUser.id !== user.id) {
      dispatch(fetchFavs(user.id, tempSuccess));
    }
    if (currentUser.id === user.id) {
      dispatch(fetchFavs(currentUser.id, addFavourite));
    }
    dispatch(favLoader(boolTest));
    setTimeout(() => dispatch(favLoader(false)), 1000);
    // eslint-disable-next-line
  }, [user]);
  return (
    <div>
      <div className="profile-container">
        <nav className="bg-white naver">
          <div className="d-flex px-3  px-md-5 justify-content-between w-100">
            <div>
              <Link to="/" className="d-flex align-items-center">
                <img src={icon} width="50" alt="icon" className="header-icon mx-1" />
                <h5 className="text-dark my-3">Neko Shelter</h5>
              </Link>
            </div>
            <div>
              <div className="d-flex align-items-center">
                <div className="flex-right-header my-3">
                  <Link className="main-username" to={{ pathname: `/Profile/${currentUser.id}`, state: { user: currentUser } }}>
                    <img src={placeholder} width="25" alt="icon" className="user-icon" />
                    <strong className="main-username">{currentUser.username}</strong>
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
        </nav>
        <div className="grid-profile p-5">
          <div className="grid-profile-left d-flex align-items-center bg-white">
            <img src={placeholder} alt="placeholder" className="mx-4 user-img-profile" />
            <div>
              <h3>{user.username}</h3>
              <span>
                Number: #
                {user.id}
              </span>
            </div>
          </div>
          <div className="grid-profile-right">
            <div className="stars">🌟🌟🌟🌟</div>
            {
              // eslint-disable-next-line no-nested-ternary
              (userFavourites.length === 0 && currentUser.id === user.id)
                || (tempFavourites.length === 0 && currentUser.id !== user.id)
                ? (
                  <div className="d-flex align-items-center flex-column">
                    <p className="empty"> No cats here. </p>
                    <img src="https://i.pinimg.com/originals/8f/0f/1a/8f0f1a58f61495c4d27bec21c31d7a28.gif" width="250" alt="gif" className="gif" />
                  </div>
                  // eslint-disable-next-line no-nested-ternary
                ) : currentUser.id === user.id
                  ? !isFavLoading && userFavourites.length === 1
                    ? cats.map((cat, i) => (
                      userFavourites[0].length > 0
                        ? userFavourites[0].map((fav) => (
                          cat.id === fav.cat_id && fav.user_id === user.id
                            ? (
                              <div key={fav.id} className="d-flex justify-content-between bg-white grid-right-div">
                                <div className="d-flex">
                                  {
                                    cat.pet_name === 'Neko Master'
                                      ? <img src={me} alt="cat" className="cat-img mx-4" />
                                      : <img src={catsArray[i]} alt="cat" className="cat-img mx-4" />
                                  }
                                  <div className="d-flex flex-column justify-content-center">
                                    <span className={`cat${cat.id}-name`}>
                                      <strong>Name: </strong>
                                      {' '}
                                      {cat.pet_name}
                                    </span>
                                    <span className={`cat${cat.id}-color`}>
                                      <strong>Color: </strong>
                                      {' '}
                                      {cat.pet_color}
                                    </span>
                                    <span className={`cat${cat.id}-age`}>
                                      <strong>Age: </strong>
                                      {' '}
                                      {cat.age}
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <Link
                                    to="/"
                                    onClick={() => {
                                      dispatch(delFav(fav.id, user.id));
                                      dispatch(favLoader(true));
                                    }}
                                  >
                                    <button
                                      className="btn-profile"
                                      type="button"
                                    >
                                      x
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            )
                            : null)) : null))
                    : (
                      <div className="d-flex align-items-center flex-column">
                        <p className="empty" />
                        <img src="https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif" width="250" alt="gif" className="gif" />
                      </div>
                    )
                  : !isFavLoading && tempFavourites.length > 0
                    ? cats.map((cat, i) => (
                      tempFavourites.length > 0
                        ? tempFavourites.map((fav) => (
                          cat.id === fav.cat_id && fav.user_id === user.id
                            ? (
                              <div key={fav.id} className="d-flex justify-content-between bg-white grid-right-div">
                                <div className="d-flex">
                                  {
                                    cat.pet_name === 'Neko Master'
                                      ? <img src={me} alt="cat" className="cat-img mx-4" />
                                      : <img src={catsArray[i]} alt="cat" className="cat-img mx-4" />
                                  }
                                  <div className="d-flex flex-column justify-content-center">
                                    <span className={`cat${cat.id}-name`}>
                                      <strong>Name: </strong>
                                      {' '}
                                      {cat.pet_name}
                                    </span>
                                    <span className={`cat${cat.id}-color`}>
                                      <strong>Color: </strong>
                                      {' '}
                                      {cat.pet_color}
                                    </span>
                                    <span className={`cat${cat.id}-age`}>
                                      <strong>Age: </strong>
                                      {' '}
                                      {cat.age}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                            : null)) : null))
                    : (
                      <div className="d-flex align-items-center flex-column">
                        <p className="empty" />
                        <img src="https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif" width="250" alt="gif" className="gif" />
                      </div>
                    )
            }
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  userFavourites: state.userFavouritesReducer.userFavourites,
  tempFavourites: state.tempFavReducer,
  cats: state.catsReducer.cats,
  currentUser: state.userReducer,
  isFavLoading: state.userFavouritesReducer.fav_loading,
});

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.number,
  }),
  isFavLoading: PropTypes.bool,
  userFavourites: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  tempFavourites: PropTypes.arrayOf(PropTypes.object),
  cats: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  userTest: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.number,
  }),
  catsTest: PropTypes.arrayOf(PropTypes.object),
  userFavouritesTest: PropTypes.arrayOf(PropTypes.object),
  boolTest: PropTypes.bool,
};
Profile.defaultProps = {
  boolTest: undefined,
  userFavouritesTest: undefined,
  tempFavourites: [],
  catsTest: undefined,
  userFavourites: [],
  isFavLoading: true,
  userTest: undefined,
  user: {},
};

export default connect(mapStateToProps, null)(Profile);

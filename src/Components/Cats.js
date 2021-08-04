/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import { connect, useDispatch } from 'react-redux';
import {
  catLoading, addFav, fetchFavs, logOut,
} from '../Actions/action';
import icon from '../ui/placeholder2.png';
import placeholder from '../ui/placeholder.jpg';
import shutdown from '../ui/shutdown.png';
import catIMG1 from '../ui/cat.jpg';
import catIMG2 from '../ui/cat1.jpg';
import catIMG3 from '../ui/cat2.jpg';
import hearts from '../ui/hearts.jpg';
import me from '../ui/me.png';
import happycat from '../ui/happycat.jpg';
import Footer from './Footer';

const Cats = ({
  cats, loading, currentUser, userFavourites, userTest, catsTest, boolTest = true,
}) => {
  if (currentUser.username === undefined || cats[0] === undefined) {
    cats = catsTest;
    currentUser = userTest;
  }
  const dispatch = useDispatch();
  const clearState = () => {
    dispatch(logOut(''));
  };
  const condition = (cat) => (userFavourites[0].some((fav) => fav.cat_id === cat.id)
    ? null
    : (
      <button
        key={cat.id}
        id={`btn${cat.id}`}
        className="btn btn-outline-warning add"
        type="button"
        onClick={() => {
          document.getElementById(`btn${cat.id}`).remove();
          addFav(currentUser.id, cat.id);
        }}
      >
        Add To🌟🌟🌟🌟
      </button>
    ));
  const catsArray = [catIMG1,
    catIMG2,
    catIMG3,
  ];
  useEffect(() => {
    dispatch(fetchFavs(currentUser.id));
    dispatch(catLoading(boolTest));
    setTimeout(() => dispatch(catLoading(false)), 1000);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <nav className="bg-white naver">
        <div className="d-flex px-3 px-md-5 justify-content-between w-100">
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
      {
        !loading
          ? (
            <div className="grid-cats">
              {cats.map((cat, i) => (
                <div className="pet-container" key={cat.id}>
                  <div className="d-flex border pet-container-div flex-column text-dark align-items-center">
                    {
                      cat.pet_name === 'Neko Master'
                        ? (
                          <figure className="tint">
                            <img src={me} alt="cat" className="cats-img" />
                            <img src={happycat} alt="hearts" className="hearts" />
                          </figure>
                        )
                        : (
                          <figure className="tint">
                            <img src={catsArray[i]} alt="cat" className="cats-img" />
                            <img src={hearts} alt="hearts" className="hearts" />
                          </figure>
                        )
                    }
                    <h4 className="d-flex justify-content-between w-75 ">
                      <span>Name: </span>
                      {' '}
                      {cat.pet_name}
                    </h4>
                    <h4 className="d-flex justify-content-between w-75 ">
                      <span>Color: </span>
                      {' '}
                      {cat.pet_color}
                    </h4>
                    <h4 className="d-flex justify-content-between w-75 ">
                      <span>Age: </span>
                      {' '}
                      {cat.age}
                    </h4>
                  </div>
                  {
                    userFavourites.length > 0 && userFavourites[0].length !== undefined
                      ? condition(cat)
                      : (
                        <button
                          key={cat.id}
                          id={`btn${cat.id}`}
                          className="btn btn-outline-warning add"
                          type="button"
                          onClick={() => {
                            document.getElementById(`btn${cat.id}`).remove();
                            addFav(currentUser.id, cat.id);
                          }}
                        >
                          Add To🌟🌟🌟🌟
                        </button>
                      )
                  }
                </div>
              ))}
            </div>
          ) : (
            <div className="d-flex justify-content-center w-100 my-5">
              <img src="https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif" width="500" alt="gif" />
            </div>
          )
      }
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cats: state.catsReducer.cats,
  loading: state.catsReducer.loading,
  currentUser: state.userReducer,
  userFavourites: state.userFavouritesReducer.userFavourites,
});

Cats.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.object).isRequired,
  catsTest: PropTypes.arrayOf(PropTypes.object),
  userFavourites: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  loading: PropTypes.bool,
  boolTest: PropTypes.bool,
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  userTest: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.number,
  }),
};
Cats.defaultProps = {
  loading: true,
  boolTest: undefined,
  userFavourites: [],
  userTest: undefined,
  catsTest: undefined,
};
export default connect(mapStateToProps, null)(Cats);

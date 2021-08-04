import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { fetchUser } from '../Actions/action';

const Login = ({ currentUser }) => {
  const [user, setUser] = useState(0);
  useEffect(() => {
  }, []);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((user !== '' || user !== ' ') && user !== 0) {
      let name = user;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      dispatch(fetchUser(name));
      history.push('/');
    }
  };
  return (
    <div>
      {
        currentUser.id
          ? <Redirect to="/" />
          : (
            <div className="login-container">
              <span className="text-danger text-left w-md-75">
                Only English letters!
                <br />
                <span className="text-dark">-No spaces or symbols or numbers</span>
              </span>
              <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" pattern="[a-zA-Z]+" className="login-input" placeholder="Enter Your Name!" onChange={(e) => handleChange(e)} required />
                <button className="btn-login" aria-hidden="true" type="submit">
                  😽
                </button>
              </form>
            </div>
          )
      }
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.userReducer,
});

Login.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default connect(mapStateToProps, null)(Login);

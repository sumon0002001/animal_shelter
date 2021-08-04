import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ currentUser, component: Component }) => (
  <Route
    render={() => {
      if (currentUser.id) {
        return <Component />;
      }
      return <Redirect to="/login" />;
    }}
  />
);
const mapStateToProps = (state) => ({
  currentUser: state.userReducer,
});

ProtectedRoute.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  component: PropTypes.elementType.isRequired,
};

export default connect(mapStateToProps, null)(ProtectedRoute);

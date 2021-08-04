import { combineReducers } from 'redux';

const catsInitialState = {
  cats: [],
  loading: true,
};

const favInitialState = {
  userFavourites: [],
  fav_loading: true,
};

const tempFavState = [];

const user = {};

const users = [];

function userReducer(state = user, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    default:
      return state;
  }
}

function tempFavReducer(state = tempFavState, action) {
  switch (action.type) {
    case 'SUCCESS_TEMP':
      return action.payload;
    default:
      return state;
  }
}

function userFavouritesReducer(state = favInitialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        userFavourites: [...favInitialState.userFavourites, action.cat],
      };
    case 'FAV_LOADING':
      return {
        ...state,
        fav_loading: action.state,
      };
    case 'EDIT':
      if (state.userFavourites.length > 1) {
        return {
          ...state,
          userFavourites: state.userFavourites
            .filter((x) => x.id !== action.id),
        };
      }
      return {
        ...state,
        userFavourites: [],
      };
    default:
      return state;
  }
}

function catsReducer(state = catsInitialState, action) {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        cats: action.payload,
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.state,
      };
    default:
      return state;
  }
}

function usersReducer(state = users, action) {
  if (action.type === 'LOAD_USERS') {
    return action.payload;
  }
  return state;
}

const reducers = {
  userReducer, catsReducer, userFavouritesReducer, tempFavReducer, usersReducer,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;

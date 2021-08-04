const url = 'https://blooming-taiga-52281.herokuapp.com/';

export const catSuccess = (cats) => ({
  type: 'SUCCESS',
  payload: cats,
});
export const addFavourite = (cat) => ({
  type: 'ADD',
  cat,
});
export const catLoading = (state) => ({
  type: 'LOADING',
  state,
});
export const favLoading = (state) => ({
  type: 'FAV_LOADING',
  state,
});
export const editFavs = (id) => ({
  type: 'EDIT',
  payload: id,
});
export const logIn = (user) => ({
  type: 'LOGIN',
  user,
});
export const logOut = (user) => ({
  type: 'LOGOUT',
  user,
});
export const tempSuccess = (favs) => ({
  type: 'SUCCESS_TEMP',
  payload: favs,
});
export const addUsers = (users) => ({
  type: 'LOAD_USERS',
  payload: users,
});

export const fetchFavs = (userId, dispatchedMethod = addFavourite) => (dispatch) => {
  const arr = [];
  fetch(`${url}favourites`)
    .then((res) => res.json())
    .then((favs) => {
      favs.map((fav) => {
        if (fav.user_id === userId) {
          arr.push(fav);
        }
        if (arr.length > 0) {
          dispatch(dispatchedMethod(arr));
        }
        return false;
      });
    }).catch((err) => { throw Error(err); });
};

export const fetchCats = () => (dispatch) => {
  fetch(`${url}cats`)
    .then((res) => res.json())
    .then((cats) => dispatch(catSuccess(cats)))
    .catch((err) => { throw Error(err); });
};
export const fetchUsers = (usernameX) => (dispatch) => {
  fetch(`${url}users`)
    .then((res) => res.json())
    .then((users) => {
      users.map((user) => {
        if (user.username === usernameX) {
          dispatch(logIn(user));
          dispatch(fetchFavs(user.id));
        }
        return null;
      });
      dispatch(addUsers(users));
    })
    .catch((err) => { throw Error(`Error: ${err}`); });
};
export const fetchUser = (username) => (dispatch) => {
  fetch(`${url}users`, {
    method: 'post',
    body: JSON.stringify({ username }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.message === 'Validation failed: Username has already been taken') {
        dispatch(fetchUsers(username));
      }
      if (response.message === "Validation failed: Username can't be blank") {
        return null;
      }
      if (response.id) {
        dispatch(fetchUsers(username));
      }
      return null;
    }).catch((err) => { throw Error(`Error: ${err}`); });
};

export const addFav = (userId, catId) => {
  fetch(`${url}favourites`, {
    method: 'post',
    body: JSON.stringify({ user_id: userId, cat_id: catId }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((res) => res.json())
    .then((fav) => {
      if (fav.id !== null) {
        fetchFavs(fav.user_id);
      }
    })
    .catch((err) => { throw Error(err); });
};
export const delFav = (favId) => (dispatch) => {
  fetch(`${url}favourites/${favId}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then(() => {
    dispatch(editFavs(favId));
  }).catch((err) => { throw Error(`ERROR: ${err}`); });
};

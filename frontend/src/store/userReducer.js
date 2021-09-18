import { csrfFetch } from "./csrf";

const GET_USERS = 'review/getUsers';

export const getUsers = (users) => {
  return { type: GET_USERS, users };
};

export const fetchUsers = () => async (dispatch) => {
  const response = await csrfFetch('/api/users');
  const users = await response.json();
  dispatch(getUsers(users));
};


const initialState = {};

const userReducer = (state = initialState, action) => {
  const newEntries = {...state};
  switch (action.type) {
    case GET_USERS:
      action.users.forEach((user) => {
        newEntries[user.id] = user;
      });
      return newEntries;
    default:
      return state;
  }
};

export default userReducer;

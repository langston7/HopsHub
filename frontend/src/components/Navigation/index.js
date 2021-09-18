import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { searchDrinks } from '../../store/drinkReducer';
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div class="dropdown-container">
        <img class="profile-pic" src="https://i1.wp.com/untappd.akamaized.net/site/assets/images/default_avatar_v3_gravatar.jpg?ssl=1" alt="profile pic"></img>
        <div class="dropdown-content">
          <a href={`/user/${sessionUser.id}`}>Profile</a>
          <a href="/">Lists</a>
          <a href="/" onClick={logout}>Logout</a>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className="nav-link-item">Log In</NavLink>
        <NavLink to="/signup" className="nav-link-item">Sign Up</NavLink>
      </>
    );
  }

  const [searchInput, setSearchInput] = useState('');
  const updateSearchInput = (e) => setSearchInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(searchDrinks(searchInput));
    history.push(`/search`);
  };

  return (
    <nav class="nav-container">
      <div class="nav-inner">
        <div class="nav-home">
          <NavLink exact to="/" className="nav-home">HopsHub</NavLink>
        </div>
        <div class="nav-links">
          <NavLink className="nav-link-item" to="/thepub">The Pub</NavLink>
          <NavLink className="nav-link-item" to="/drinks">Drinks</NavLink>
          <NavLink className="nav-link-item" to="/help">Help</NavLink>
        </div>
        <div class="nav-user">
          {isLoaded && sessionLinks}
        </div>
        <div class="search-container">
          <form class="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              value={searchInput}
              placeholder="Find a beer, brewery, or bar"
              class="search-input"
              onChange={updateSearchInput} />
            <button type="submit" class="search-icon"></button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

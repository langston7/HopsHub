import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
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
          <a href="/">Profile</a>
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

  return (
    <nav class="nav-container">
      <div class="nav-inner">
        <div class="nav-home">
          <NavLink exact to="/" className="nav-home">HopsHub</NavLink>
        </div>
        <div class="nav-links">
          <NavLink className="nav-link-item" to="/thepub">The Pub</NavLink>
          <NavLink className="nav-link-item" to="/toprated">Top Rated</NavLink>
          <NavLink className="nav-link-item" to="/help">Help</NavLink>
        </div>
        <div class="nav-user">
          {isLoaded && sessionLinks}
        </div>
        <div class="search-container">
          <form action="../search" method="post" class="search-form">
            <input type="search" name="search" placeholder="Find a beer, brewery, or bar" class="search-input"></input>
            <button class="search-icon"></button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

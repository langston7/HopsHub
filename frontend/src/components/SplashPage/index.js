import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginFormModal from '../LoginFormModal/index.js';
import "./SplashPage.css";

function SplashPage() {


  return (
    <div class="splash-container">
      <div class="header-container background-tint">
        <nav class="splash-nav">
          <LoginFormModal/>
          <NavLink to='/signup' className="user-button">CREATE AN ACCOUNT</NavLink>
        </nav>
        <div class="subheader">
          <div class="header-left">
            <img class="header-logo" alt="hopslogo" src="https://cdn.discordapp.com/attachments/841133997501317161/887109068970418186/1200px-Wildblood_hops_detail.png"></img>
            <h1 class="header-title">HOPSHUB</h1>
            <h2 class="header-desc">Discover and share your favorite beer.</h2>
          </div>
          <div class="header-right">
            <img class="header-image" alt="phonepic" src="https://untappd.akamaized.net/assets/custom/homepage/images/masthead-img-main.png"></img>
          </div>
        </div>
      </div>
      <div class="search-bar-container">
        <form action="/search" method="post" class="search-form">
          <input type="search" name="search" placeholder="Search beers, breweries, or venues" class="search-input"></input>
          <button></button>
        </form>
      </div>
      <div class="splash-inner">

      </div>
    </div>
  )
}


export default SplashPage;

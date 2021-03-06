import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import SignUpFormPage from "./components/SignUpFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import ThePub from "./components/ThePub";
import Search from "./components/Search";
import DrinkPage from "./components/DrinkPage";
import NewDrink from "./components/NewDrink";
import ProfilePage from "./components/ProfilePage";
import Drinks from './components/Drinks';

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if(sessionUser){
    return (
      <>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route path="/signup">
              <SignUpFormPage />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/thepub">
              <ThePub />
            </Route>
            <Route path="/toprated">

            </Route>
            <Route path="/help">

            </Route>
            <Route path="/drinks/:drinkId">
              <DrinkPage />
            </Route>
            <Route path="/new_drink">
              <NewDrink />
            </Route>
            <Route path="/user/:userId">
              <ProfilePage />
            </Route>
            <Route path="/drinks">
              <Drinks />
            </Route>
          </Switch>
        )}
      </>
    );
  } else {
    return (
      <>
        {isLoaded && (
          <Switch>
            <Route path="/" exact>
              <SplashPage />
            </Route>
            <Route path="/signup">
              <SignUpFormPage />
            </Route>
          </Switch>
        )}
      </>
    )
  }

}


export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import UserDetails from "./UserDetails";

//Overall layouting
//Here we have the header, footer and anything else which is site-wide
function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <HeaderComponent />
        <div className="main">
          <Switch>
            <Route path="/" exact={true}>
              <HomeComponent />
            </Route>
            <Route path="/about">
              <AboutComponent />
            </Route>
            <Route path="/user-details/:id">
              <UserDetails />
            </Route>
          </Switch>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;

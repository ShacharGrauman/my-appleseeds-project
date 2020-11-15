import React from 'react';

import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

//Overall layouting
//Here we have the header, footer and anything else which is site-wide
function App() {
  return (
    <div className="container-fluid">
      <HeaderComponent />
      <div className="main">
        <HomeComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;

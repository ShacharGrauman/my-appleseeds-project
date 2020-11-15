import React from "react";

function FooterComponent() {
  return (
    <div className="footer">
      <hr />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Footer</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;

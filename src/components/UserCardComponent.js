import React from "react";

function UserCardComponent(props) {
  return (
      props.user &&
    <div className="card">
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.jP5dVGDGlW9sz5XV5GYvkgHaDE&pid=Api&P=0&w=420&h=175"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.user.name}</h5>
        <p className="card-text">
          {props.user.company.catchPhrase}
        </p>
        <button className="btn btn-primary btn-block">Go to full details</button>
      </div>
    </div>
  );
}

export default UserCardComponent;

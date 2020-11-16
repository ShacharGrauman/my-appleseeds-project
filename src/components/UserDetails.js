import React from "react";
import { useParams, useHistory } from "react-router-dom";

// const user = {
//   id: 7,
//   name: "Kurtis Weissnat",
//   username: "Elwyn.Skiles",
//   email: "Telly.Hoeger@billy.biz",
//   address: {
//     street: "Rex Trail",
//     suite: "Suite 280",
//     city: "Howemouth",
//     zipcode: "58804-1099",
//     geo: {
//       lat: "24.8918",
//       lng: "21.8984",
//     },
//   },
//   phone: "210.067.6132",
//   website: "elvis.io",
//   company: {
//     name: "Johns Group",
//     catchPhrase: "Configurable multimedia task-force",
//     bs: "generate enterprise e-tailers",
//   },
// };

function UserDetails() {
  const { id } = useParams();
  const history = useHistory();

  const users = JSON.parse(localStorage.getItem("users"));

  const user = users.find((user) => user.id == id);

  const goToHomepage = () => {
      history.push("/");
  };

  const goToAboutPage = () => {
      history.push("/about");
  }

  return (
    <div>
      <h1>{user.company.name}</h1>
      <button onClick={goToHomepage}>Go to Home page</button>
      <button onClick={goToAboutPage}>Go to About page</button>
    </div>
  );
}

export default UserDetails;

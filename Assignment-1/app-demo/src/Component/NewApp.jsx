import React, { Fragment } from "react";
import "../App.css"

export default function NewApp() {
  const newStytle = {
    border: "1px solid red",
    margin: "5px",
    padding: "10px",
    width: "33%",
  };
  return (
    <Fragment>
      <div className="box" style={newStytle}>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum rerum,
          neque deleniti ullam amet, delectus eos eum quod praesentium quaerat
          at ipsam ducimus, architecto voluptate harum. Excepturi accusantium
          alias quaerat!
        </p>
      </div>
    </Fragment>
  );
}




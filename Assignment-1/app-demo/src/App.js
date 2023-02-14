import React, { Fragment } from "react";
import NewApp from "./Component/NewApp";
import Welcome from "./Component/Welcome";

export default function App() {
  return (
    <Fragment>
      <Welcome name="Harish" age="27" city="Jaipur" />
      <Welcome name="Hardik" age="27" city="Jaipur" />
      <Welcome name="Sadik" age="27" city="Jaipur" />
      <div
        className="Main-box"
        style={{
          display: "flex",
          justifyContent: "center",
          placeItems: "center",
          height: "100vh",
        }}
      >
        <NewApp />
        <NewApp />
        <NewApp />
      </div>
    </Fragment>
  );
}

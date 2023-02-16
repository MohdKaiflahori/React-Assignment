import React, { Fragment } from "react";
import "../App.css"

export default function NewApp(props) {
  const {name , address , city} = props
  React.useEffect(() => {
    console.log("It call six time in console")
 }, [])
  const newStytle = {
    border: "1px solid red",
    margin: "5px",
    padding: "10px",
    width: "33%",
  };
  return (
    <Fragment>
      <div className="box" style={newStytle}>
        <h1>Hello {name} </h1>
        <p>
          Where are you from - I am from  {city} .
          your current Address-{address} .
        </p>
      </div>
    </Fragment>
  );
}




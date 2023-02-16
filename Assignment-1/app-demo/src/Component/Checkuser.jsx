import React from "react";
import Guest from "./Guest";
import User from "./User";

export default function Checkuser(props) {
  const user = props.user;
  if (user) {
    return <User name={"Kaif , Anas"} />;
  }
  return <Guest />;
}

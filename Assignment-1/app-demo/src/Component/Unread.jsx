import React from "react";

export default function Unread(props) {
  const unreadMessages = props.unreadMessages;
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      <h1>hello</h1>
      {unreadMessages.length > 0 && (
        <h2>you have {unreadMessages.length} unreadmessage.</h2>
      )}
      <h3>
        The user is <b>{isLoggedIn ? "currently" : "not"} logged in.</b>
      </h3>
    </div>
  );
}

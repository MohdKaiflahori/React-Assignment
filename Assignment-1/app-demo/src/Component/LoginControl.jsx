import React from "react";
import Checkuser from "./Checkuser";
import Login from "./Login";
import Logout from "./Logout";

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { user: true };
  }
  handleLoginClick() {
    this.setState({ user: true });
  }
  handleLogoutClick() {
    this.setState({ user: false });
  }
  render() {
    const login = this.state.user;
    let button;
    if (login) {
      button = <Logout onClick={this.handleLogoutClick} />;
    } else {
      button = <Login onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Checkuser user={login} />
        {button}
      </div>
    );
  }
}

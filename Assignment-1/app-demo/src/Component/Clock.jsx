import React from "react";
function Sendclock(props) {
  return (
    <div>
      <p>Forwording Time - {props.date.toLocaleTimeString()}</p>
    </div>
  );
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.time = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.time);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <p>Time is - {this.state.date.toLocaleTimeString()}.</p>
        <Sendclock date={this.state.date} />
      </div>
    );
  }
}
export default Clock;

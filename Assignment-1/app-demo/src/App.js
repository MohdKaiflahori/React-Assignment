import React, { Fragment } from "react";
import NewApp from "./Component/NewApp";
import Welcome from "./Component/Welcome";
import Clock from "./Component/Clock";
import LoginControl from "./Component/LoginControl";
import Counter from "./Component/Counter";
import Unread from "./Component/Unread";
import Hide from "./Component/Hide";
import List from "./Component/List";
import Topic from "./Component/Topic";
import Form from "./Component/Form";

export default function App() {
  const numbers = [1,2,3,4,5];
  const details = [
    {id:1,  title:"Hooks" ,content:"Use in Functional component"},
    {id:2,  title:"Props" , content:"For Data transfer" },
    {id:3,  title:"State" , content:"Use in Functional and Class component"},
    {id:4,  title:"Life-cycle",  content:"Start to end process"}
  ]
  const arr = [{
    name:"Kaif",
    city:"Jaipur",
    address:"3c Krishna vihar colony Jaipur"
  },
  {
    name:"Ajay",
    city:"Alwar",
    address:"1c new road sanganer"
  },
  {
    name:"Harish",
    city:"Dausa",
    address:"2c Vijay path"
  }
]
const message = ["React" , "Re:react", "Re:Re:React"]
  return (
    <Fragment>
      <Welcome name="Harish" age="27" city="Jaipur" />
      <Welcome name="Hardik" age="27" city="Jaipur" />
      <Welcome name="Sadik" age="27" city="Jaipur" />
      <List numbers={numbers} />
      <Unread unreadMessages={message} />
      <Form />

      <Clock />
      <Clock />
      <Clock />
      <LoginControl />
      <Hide />
      <Topic name={details} />
      <div
        className="Main-box"
        style={{
          display: "flex",
          justifyContent: "center",
          placeItems: "center",
          height: "100vh",
        }}
      >
        {arr.map(x => (<NewApp name={x.name} address={x.address} city = {x.city} />))}
      </div>
      <Counter />
    </Fragment>
  );
}

import React from "react";
function ListItem(props) {
  return <li>{props.value}</li>;
}
export default function List(props) {
  const numbers = props.numbers;
  const listitem = numbers.map((num) => <ListItem key={num.toString()} value={num} />);
  return (
   <ul>
    {listitem}
   </ul>
  );
}

import React from "react";

export default function Hide() {
  let [hide, setHide] = React.useState(true);

  function handleToggleClick() {
    setHide(!hide);
  }
  
   const HideLable = (props)=> {
    return (
      <div>
      {props.hide ? <p>Hey i am hiding {props.item}</p> : null}
      </div>
    )
  }
  
  return (
    <div>
     {[1,2,3,4,5].map((item)=> <HideLable hide={hide} item={item}/>)}
      <button onClick={handleToggleClick}>{hide ? "hide" : "show"}</button>
    </div>
  );
}

import React from "react";

export default function Form() {
  const [name, setName] = React.useState("");
  const [update, setUpdate] = React.useState(name);
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleSubmit(event) {
    setUpdate(name);
    event.preventDefault();
    setName("");  
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>Intial type : {name}</p>
      <p>After Submit : {update}</p>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./List.module.css";
import { v4 as uuidv4 } from "uuid";

export default function List({onAdd}) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === 0){
      setText('')
      return;
    }
    onAdd({id: uuidv4() , text, status: "active"})
    setText('')
  } 
  const handleChange = (e) => setText(e.target.value)

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} placeholder="Add TodoList" onChange={handleChange}/>
      <button>ADD</button>
    </form>
  </div>;
}

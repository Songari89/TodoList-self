import React, { useState } from "react";
import List from "../List/List";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <div>
      <li>
        <input
          id={id}
          type="checkbox"
          checked={status === "completed"}
          onChange={handleChange}
        />
        {/* id는 input이랑 html을 연결하기위한 장치이기 떄문에 같은 값을 넣어준다. */}
        <label htmlFor={id}>{text}</label>
        <button onClick={handleDelete}>Del</button>
      </li>
    </div>
  );
}

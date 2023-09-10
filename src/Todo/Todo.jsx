import React from "react";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    
      <li>
        <input type="checkbox" id={id} checked={status === "completed"} onChange={handleChange} />
        <label htmlFor={id}>{text}</label>
        <button onClick={handleDelete}>Del</button>
      </li>
  );
}

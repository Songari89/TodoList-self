import React, { useState } from "react";
import styles from "./TodoList.module.css";
import List from "../List/List";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1234", text: "공부하기", status: "active" },
    { id: "1235", text: "집 가기", status: "active" },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => setTodos((todo) => todo.id === updated.id ? updated : todo)
  const handleDelete = (deleted) => setTodos(todos.filter((todo) => todo.id !== deleted.id))
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}   />
        ))}
      </ul>
      <List onAdd={handleAdd} />
    </div>
  );
}

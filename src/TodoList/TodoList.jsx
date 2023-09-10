import React, { useEffect, useState } from "react";
import styles from "./TodoList.module.css";
import List from "../List/List";
import Todo from "../Todo/Todo";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(
    () => readDataFromLocalStorage()
    );
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const filtered = getFilteredItem(todos, filter);
  return (
    <div>
      <ul>
        {console.log(todos)}
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <List onAdd={handleAdd} />
    </div>
  );
}

function getFilteredItem(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

function readDataFromLocalStorage() {
  console.log('readDataFromLocalStorage')
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import DarkModeProvider from "./DarkModeProvider";


const filters = ['all', 'active', 'completed']
function App() {
  const [filter, setFilter] = useState(filters[0])
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;

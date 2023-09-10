import React from "react";
import styles from './Header.module.css'
import { useDarkMode } from "../DarkModeProvider";

export default function Header({ filter, filters, onFilterChange}) {
  const { darkMode, toggleDarkMode} = useDarkMode();
  return (
    <header>
      <button onClick={toggleDarkMode}>{darkMode? 'DarkMode':'LightMode'}</button>
      <ul className={styles.filter}>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

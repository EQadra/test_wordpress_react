// components/Header.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  console.log("Dark mode está:", darkMode);

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🧮 Calculadora</h1>
      <button
  onClick={() => {
    setDarkMode(!darkMode);
    console.log("Dark mode está:", !darkMode);  // Aquí se muestra el nuevo estado
  }}
  className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded transition"
>
  {darkMode ? '🌞 Claro' : '🌙 Oscuro'}
</button>

    </header>
  );
};

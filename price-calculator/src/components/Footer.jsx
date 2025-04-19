
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-4 text-center text-sm">
      © {new Date().getFullYear()} - Calculadora de Precios.
    </footer>
  );
};

import React, { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState(0);
  const [selectValues, setSelectValues] = useState({
    factorA: 1,
    factorB: 1,
    factorC: 1,
  });
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const calculatePrice = () => {
    const { factorA, factorB, factorC } = selectValues;
    const total = inputValue * factorA * factorB * factorC;
    setResult(total);
  };

  return (
    <CalculatorContext.Provider
      value={{
        inputValue,
        setInputValue,
        selectValues,
        setSelectValues,
        result,
        calculatePrice,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);

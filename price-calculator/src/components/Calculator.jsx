// Calculator.jsx
import React from "react";
import Swal from "sweetalert2";
import { useCalculator } from "../context/CalculatorContext";

export const Calculator = () => {
  const {
    inputValue,
    setInputValue,
    selectValues,
    setSelectValues,
    result,
    calculatePrice,
    darkMode,
  } = useCalculator();

  const handleSelectChange = (e) => {
    setSelectValues({
      ...selectValues,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNaN(inputValue) || inputValue <= 0) {
      Swal.fire({
        icon: "error",
        title: "Valor inválido",
        text: "Por favor ingresa un número mayor a 0.",
      });
      return;
    }

    calculatePrice();

    Swal.fire({
      icon: "success",
      title: "¡Cálculo realizado!",
      text: "El precio se calculó correctamente.",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <div
      className={`calculator max-w-md mx-auto p-4 rounded-lg shadow-md ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Calculadora de Precios</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="inputValue" className="block mb-2">
            Valor inicial:
          </label>
          <input
            type="number"
            id="inputValue"
            value={inputValue}
            onChange={(e) => setInputValue(parseFloat(e.target.value))}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Ej. 100"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          {["factorA", "factorB", "factorC"].map((factor, idx) => (
            <div key={factor}>
              <label className="block mb-1">Opción {idx + 1}:</label>
              <select
                name={factor}
                value={selectValues[factor]}
                onChange={handleSelectChange}
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value={1}>Ninguno (x1)</option>
                <option value={1.5}>Medio (x1.5)</option>
                <option value={2}>Alto (x2)</option>
              </select>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Calcular
        </button>
      </form>

      {result !== null && (
        <div className="mt-4 text-lg font-semibold text-center">
          El precio calculado es:{" "}
          <span className="text-green-400">${result}</span>
        </div>
      )}
    </div>
  );
};

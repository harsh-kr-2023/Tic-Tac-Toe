import './App.css';
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleBtnClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    }
    else if (value === 'C') {
      setInput("");
      setResult("");
    }
    else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="result">
        {result}
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleBtnClick('7')}>7</button>
          <button onClick={() => handleBtnClick('8')}>8</button>
          <button onClick={() => handleBtnClick('9')}>9</button>
          <button onClick={() => handleBtnClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleBtnClick('4')}>4</button>
          <button onClick={() => handleBtnClick('5')}>5</button>
          <button onClick={() => handleBtnClick('6')}>6</button>
          <button onClick={() => handleBtnClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleBtnClick('1')}>1</button>
          <button onClick={() => handleBtnClick('2')}>2</button>
          <button onClick={() => handleBtnClick('3')}>3</button>
          <button onClick={() => handleBtnClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleBtnClick('.')}>.</button>
          <button onClick={() => handleBtnClick('0')}>0</button>
          <button onClick={() => handleBtnClick('%')}>%</button>
          <button onClick={() => handleBtnClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="double-width" onClick={() => handleBtnClick('C')}>C</button>
          <button className="double-width" onClick={() => handleBtnClick('=')}>=</button>
        </div>
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;

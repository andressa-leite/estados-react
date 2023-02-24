import { useState } from "react";
import React from 'react';

function Componente () {
    const[inputValue, setInputValue] = useState("Pedro");

    const onChange = () => {
        const newValue = e.target.value;
        setInputValue(newValue);
    };

  return (
    <div>
        <input placeholder="Type something..." onChange={onChange} >
            {inputValue}
        </input>
    </div>
  );
};

export default Componente;
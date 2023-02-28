import { useState } from "react";
import React from 'react';

// StateTutorial2 = componente

function StateTutorial2 () {
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

export default StateTutorial2;
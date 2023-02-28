import { useState } from "react";
import React from 'react';

//StateTutorial = Componente;

function StateTutorial () {
    const[counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

  return (
    <div>
        {counter} 
         <button onClick={increment}>increment</button>
    </div>
  )
}

export default StateTutorial;
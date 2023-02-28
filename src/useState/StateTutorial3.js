import React from 'react'

// StateTutorial3 = componente

function StateTutorial3() {
    const [count, setCount] = useState(4)


    function decrementCount() {
        setCount(prevCount => prevCount -1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount +1)
    }

  return (
    <>
    <button onClick={decrementCount}>-</button>;
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>;
    </>
  )
}

export default StateTutorial3
import React, {useState} from 'react';
import styles from './Counter.module.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    }

  return (
    <div className={styles.counter}>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      
    </div>
  )
}

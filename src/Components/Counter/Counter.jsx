import { useState } from 'react';

export default function Counter({ handleIncrement, handleDecrement }) {
    const [state, setState] = useState(0);
    // const handleIncrement = () => {
    //     setState(state + 1);
    // };
    // const handleDecrement = () => {
    //     setState(state - 1);
    // };
    return (
        <div>
            <h1>Counter {state}</h1>
            <button onClick={handleIncrement}> Increase </button>
            <button onClick={handleDecrement}> Decrease </button>
        </div>
    );
}

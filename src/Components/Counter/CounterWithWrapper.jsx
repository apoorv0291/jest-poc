import { useState } from 'react';
import Wrapper from './Wrapper';

export default function CounterWithWrapper({
    handleIncrement,
    handleDecrement,
}) {
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
            <Wrapper>
                <h1>Its a wrapper</h1>
                <h1>Its a wrapper2</h1>
            </Wrapper>
        </div>
    );
}

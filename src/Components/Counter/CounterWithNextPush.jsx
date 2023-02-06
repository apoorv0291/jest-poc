import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Counter({ handleIncrement, handleDecrement }) {
    const router = useRouter();
    const [state, setState] = useState(0);
    console.log('Coutner ::::');
    const handlePush = () => {
        console.log('Handle push called');
        console.log('Handle push called');
        console.log('Handle push called');
        console.log('Handle push called');
        router.push('/apoorv');
    };

    return (
        <div>
            <h1>Counter {state}</h1>
            <button onClick={handleIncrement}> Increase </button>
            <button onClick={handleDecrement}> Decrease </button>
            <button onClick={handlePush}> Push </button>
        </div>
    );
}

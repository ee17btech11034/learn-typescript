import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0) // will always take a number

    return (
        <div>
            <h4>Counter: {count}</h4>
            <button onClick={()=>setCount(val=> val-1)}>Dec</button>
            <button onClick={()=>setCount(val=> val+1)}>Inc</button>
        </div>
    );
}

export default Counter;

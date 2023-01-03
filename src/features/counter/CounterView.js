import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseBy5, increment, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    };
    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleReset = () => {
        dispatch(reset());
    };
    const handleIncreaseBy5 = () => {
        dispatch(increaseBy5(5));
    };
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncreaseBy5}>Increment by 5</button>
        </div>
    );
};

export default CounterView;
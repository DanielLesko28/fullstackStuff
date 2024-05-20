import { Button } from '@chakra-ui/react';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const CounterPage = () => {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();
  
    const increment = () => dispatch({ type: 'increment' });
    const decrement = () => {
        if(count > 0){
            dispatch({ type: 'decrement' })
        }
    };
  
    return (
      <div>
        <h1>{count}</h1>
        <Button m={2} onClick={increment}>+</Button>
        <Button m={2} onClick={decrement}>-</Button>
      </div>
    );
}

export default CounterPage
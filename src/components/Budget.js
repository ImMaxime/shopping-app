import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Budget = () => {
    const { Currency, dispatch, Money } = useContext(AppContext);
    const [value,setValue] = useState(Money);

    const updateBudget = (event) => {
        const inputValue = parseInt(event.target.value, 10);
        // Check if the input is a valid number
        if (!isNaN(inputValue)) {
          setValue(inputValue);

            const action = {
              budget: inputValue
            }
            dispatch({
              type: 'SET_BUDGET',
              payload: action
            });
        }


    }
    window.onload = function() {
        const action = {
            budget: value
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: action
        });
    };


    return (
        <div className='alert alert-secondary'>
            Budget: {Currency}
            <input 
                required="" 
                type="number" 
                id="cost" 
                onChange={updateBudget} 
                value={value}
            />
        </div>
    );
};

export default Budget;
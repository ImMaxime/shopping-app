import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);
    const item = {
        name: props.name,
        budget: 10
    };
    const handleDeleteItem = () => {
        dispatch({
            type: 'RED_QUANTITY',
            payload: item,
        });
    };

    const submitEvent = () => {
        dispatch({
            type: 'ADD_QUANTITY',
            payload: item,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{parseInt(props.budget)}</td>
        <td><FaPlusCircle size='2.2em' color="lime" onClick={submitEvent}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;
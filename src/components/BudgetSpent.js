import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const BudgetSpent = () => {
    const {spent, Currency} = useContext(AppContext);
    return (
        <div className='alert alert-success'>
            Spent so far:{spent+Currency}
        </div>
    );
};

export default BudgetSpent;

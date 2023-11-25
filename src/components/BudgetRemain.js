import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const BudgetRemain = () => {
    const {remain, Currency} = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            Remaining:{remain+ Currency}
        </div>
    );
};

export default BudgetRemain;

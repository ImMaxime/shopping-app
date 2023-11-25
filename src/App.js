import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import BudgetSpent from './components/BudgetSpent';
import BudgetRemain from './components/BudgetRemain';
import ExpenseList from './components/ExpenseList';
import Currency from './components/Currency';
import ItemSelected from './components/ItemSelected';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'> 
                    <div className='col-sm'>
                        <Budget/>
                    </div>
                    <div className='col-sm'>
                        <BudgetSpent/>
                    </div>
                    <div className='col-sm'>
                        <BudgetRemain/>
                    </div>
                    <div className='col-sm'>
                        <Currency/>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList/>
                    </div>
                </div>
                <h3 className='mt-3'>Change Allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ItemSelected/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
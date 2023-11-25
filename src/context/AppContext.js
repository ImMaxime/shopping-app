import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];
    switch (action.type) {
        case 'SET_BUDGET':
            if(!budgetOk(action.payload.budget)) 
                return {
                    ...state,
                };
            state.Money = action.payload.budget;
            action.type = "DONE";
            updateCurrency();
            return {
                ...state,
            };
        case 'ADD_QUANTITY':
            if(!verifyBudget(action.payload.budget)) 
                return{
                    ...state,
                }
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.budget = expense.budget + action.payload.budget;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            updateCurrency();
            return {
                ...state,
            };
        case 'RED_QUANTITY':
            if(!verifyBudget(-action.payload.budget)) 
                return{
                    ...state,
                }
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.budget = expense.budget - action.payload.budget;
                }
                expense.budget = expense.budget < 0 ? 0: expense.budget;
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            updateCurrency();
            return {
                ...state,
            };
        case 'DELETE_ITEM':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.budget = 0;
                }
                new_expenses.push(expense);
                updateCurrency();
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            updateCurrency();
            return {
                ...state,
            };
        case 'CHG_Currency':
            action.type = "DONE";
            updateCurrency();
            state.Currency = action.payload;
            return {
                ...state
            }
        default:
            return state;
    }

    function verifyBudget(val){
        //console.log('Stats Budget: ',state.Money, state.spent, val, state.spent + val)
        const busted = state.Money >= (state.spent + val);
        console.log(state.Money-state.spent)
        if (!busted) alert('The budget is exceeded. Remaining: '+(state.Money-state.spent)+state.Currency);
        return busted;
    }

    function budgetOk(newBudget){
        const busted = newBudget >= state.spent;
        console.log(newBudget,state.spent,newBudget-state.spent)
        if (!busted) alert('you cannot reduce the budget value lower than the spending');
        return busted;
    }
    
    function updateCurrency(){
        state.spent = 0;
        state.remain = 0;
        state.expenses.forEach( (e) => {
            state.spent += e.budget;
        })
        state.remain = state.Money - state.spent;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    expenses: [
        { id: "Marketing", name: 'Marketing', budget: 500 },
        { id: "Finance", name: 'Finance', budget: 300 },
        { id: "Sales", name: 'Sales', budget: 400 },
        { id: "Human Resource", name: 'Human Resource', budget: 600 },
        { id: "IT", name: 'IT', budget: 200 },
    ],
    Currency: '£',
    Money: 2000,
    spent: 0,
    remain: 0,
    
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + (item.unitprice*item.quantity));
    }, 0);
    state.CartValue = totalExpenses;

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                Money: state.Money,
                CartValue: state.CartValue,
                dispatch,
                Currency: state.Currency,
                spent: state.spent,
                remain: state.remain

            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
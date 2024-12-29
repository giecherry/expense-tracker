import { createContext, useState } from "react";


export const DataContext = createContext();

export function DataContextProvider ({children}){
    
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = JSON.parse(localStorage.getItem("Expenses")) || [];
        return savedExpenses;
    });
    const [incomes, setIncomes] = useState(() => {
        const savedIncomes = JSON.parse(localStorage.getItem("Incomes")) || [];
        return savedIncomes;
    });
    const [savings, setSavings] = useState(() => {
        const savedSavings = JSON.parse(localStorage.getItem("Savings")) || [];
        return savedSavings;
    });


    const addExpense = (newExpense) => {
        const updatedExpenses = [...expenses, newExpense];
        setExpenses(updatedExpenses);
        localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    };
    const addIncome = (newIncome) => {
        const updatedIncomes = [...incomes, newIncome];
        setIncomes(updatedIncomes);
        localStorage.setItem("Incomes", JSON.stringify(updatedIncomes));
    };
    const addSaving = (newSaving) => {
        const updatedSavings = [...savings, newSaving];
        setSavings(updatedSavings);
        localStorage.setItem("Savings", JSON.stringify(updatedSavings));
    };


    return (
        <DataContext.Provider value={{ expenses, incomes, savings, addExpense, addIncome, addSaving }}>
            {children}
        </DataContext.Provider>
    );
}
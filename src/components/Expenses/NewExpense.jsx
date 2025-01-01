import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import SelectDropdown from "../SelectDropdown.jsx";

const NewExpense = () => {

    const {expenses, addExpense} = useContext(DataContext)

    const [expenseDescription, setExpenseDescription] = useState("") 
    const [expenseAmount, setExpenseAmount] = useState(0)
    const [expenseCategory, setExpenseCategory] = useState(null)
    const [expenseCreationDate, setExpenseCreationDate] = useState(new Date())

    const handleAddExpense = () => {
        if (!expenseDescription || !expenseAmount || !expenseCategory) {
            alert("Please fill out all details.");
            return;
        }

        const newExpense = {
            id: expenses.length + 1,
            owner: JSON.parse(sessionStorage.getItem("Inloggad user:")).userName,
            amount: expenseAmount,
            description: expenseDescription,
            category: expenseCategory,
            creationDate:new Date(expenseCreationDate),
        };

        addExpense(newExpense);
        alert("Expense added successfully!");
    };



    return (
        <div className="container flex flex-col justify-around bg-neutral-beige rounded-3xl p-8 h-auto gap-2">
            <input className="rounded-3xl p-3 w-[90%] border-transparent focus:border-gray-400 bg-white focus:outline-none shadow-sm" type="text" placeholder="Description" onChange={(e)=> setExpenseDescription(e.target.value)}/> 
            <input className="rounded-3xl p-3 w-[90%] border-transparent focus:border-gray-400 bg-white focus:outline-none shadow-sm" placeholder="Amount" type="number" onChange={(e) => setExpenseAmount(e.target.value) } />
            <SelectDropdown onChange={(e) => setExpenseCategory(e.target.value)} />
            <button className="rounded-3xl p-2 px-4 m-2 w-1/4 bg-muted-rose hover:bg-deep-rose shadow-soft-pink" onClick={handleAddExpense}>Add</button>
        </div>
    );
}

export default NewExpense;


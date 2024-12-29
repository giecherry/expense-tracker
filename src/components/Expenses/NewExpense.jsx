import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

const NewExpense = () => {

    const navigate = useNavigate();

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
            description: expenseDescription,
            category: expenseCategory,
            creationDate:new Date(expenseCreationDate),
        };

        addExpense(newExpense);
        alert("Expense added successfully!");
    };

    return (
        <div className="container flex flex-col justify-around bg-neutral-beige rounded-3xl p-8 h-[50%] gap-2">
                <input className="rounded-3xl p-2 px-16 w-[80%] " type="text" placeholder="Description" onChange={(e)=> setExpenseDescription(e.target.value)}/> 
                <input className="rounded-3xl p-2 px-16 w-[80%] " placeholder="Amount" type="number" onChange={(e) => setExpenseAmount(e.target.value) } />
                <div>
                    <select className="rounded-3xl p-2 px-16 w-[80%] border-transparent appearance-none border focus:outline-none" value={expenseCategory}onChange={(e) => setExpenseCategory(e.target.value)}>
                        <option value="" disabled>Select a category</option>
                        <option value="Housing">Housing</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            <button className="rounded-3xl p-2 px-4 m-2 w-1/4 bg-muted-rose hover:bg-deep-rose shadow-soft-pink" onClick={handleAddExpense}>Add</button>
        </div>
    );
}

export default NewExpense;


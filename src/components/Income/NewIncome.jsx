import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import SelectDropdown from "../SelectDropdown.jsx";

const NewIncome = () => {
    const {incomes, addIncome} = useContext(DataContext)

    const [incomeDescription, setIncomeDescription] = useState("") 
    const [incomeAmount, setIncomeAmount] = useState(0)
    const [incomeCategory, setIncomeCategory] = useState(null)
    const [incomeCreationDate, setIncomeCreationDate] = useState(new Date())

    const handleAddIncome = () => {
        if (!incomeDescription || !incomeAmount || !incomeCategory) {
            alert("Please fill out all details.");
            return;
        }

        const newIncome = {
            id: incomes.length + 1,
            owner: JSON.parse(sessionStorage.getItem("Inloggad user:")).userName,
            amount: incomeAmount,
            description: incomeDescription,
            category: incomeCategory,
            creationDate:new Date(incomeCreationDate),
        };

        addIncome(newIncome);
        alert("Income added successfully!");
    };



    return (
        <div className="container flex flex-col justify-around bg-neutral-beige rounded-3xl p-8 h-auto gap-2">
            <input className="rounded-3xl p-3 w-[90%] border-transparent focus:border-gray-400 bg-white focus:outline-none shadow-sm" type="text" placeholder="Description" onChange={(e)=> setIncomeDescription(e.target.value)}/> 
            <input className="rounded-3xl p-3 w-[90%] border-transparent focus:border-gray-400 bg-white focus:outline-none shadow-sm" placeholder="Amount" type="number" onChange={(e) => setIncomeAmount(e.target.value) } />
            <SelectDropdown  onChange={(e) => setIncomeCategory(e.target.value)}/>
            <button className="rounded-3xl p-2 px-4 m-2 w-1/4 bg-muted-rose hover:bg-deep-rose shadow-soft-pink" onClick={handleAddIncome}>Add</button>
        </div>
    );
}

export default NewIncome;
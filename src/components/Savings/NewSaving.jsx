import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import SelectDropdown from "../SelectDropdown.jsx";

const NewSaving = () => {
    const {savings, addSaving} = useContext(DataContext)

    const [savingDescription, setSavingDescription] = useState("") 
    const [savingAmount, setSavingAmount] = useState(0)
    const [savingCategory, setSavingCategory] = useState(null)
    const [savingCreationDate, setSavingCreationDate] = useState(new Date())

    const handleAddSaving = () => {
        if (!savingDescription || !savingAmount || !savingCategory) {
            alert("Please fill out all details.");
            return;
        }

        const newSaving = {
            id: savings.length + 1,
            owner: JSON.parse(sessionStorage.getItem("Inloggad user:")).userName,
            amount: savingAmount,
            description: savingDescription,
            category: savingCategory,
            creationDate:new Date(savingCreationDate),
        };

        addSaving(newSaving);
        alert("Saving added successfully!");
    };



    return (
        <div className="container flex flex-col justify-around bg-neutral-beige rounded-3xl p-8 h-auto gap-2">
            <input className="rounded-3xl p-3 w-[90%] border-transparent focus:border-gray-400 bg-white focus:outline-none shadow-sm" type="text" placeholder="Description" onChange={(e)=> setSavingDescription(e.target.value)}/> 
            <input className="rounded-3xl p-3 w-[90%] border-transparent focus:border-gray-400 bg-white focus:outline-none shadow-sm" placeholder="Amount" type="number" onChange={(e) => setSavingAmount(e.target.value) } />
            <SelectDropdown onChange={(e) => setSavingCategory(e.target.value)} />
            <button className="rounded-3xl p-2 px-4 m-2 w-1/4 bg-muted-rose hover:bg-deep-rose shadow-soft-pink" onClick={handleAddSaving}>Add</button>
        </div>
    );
}

export default NewSaving;
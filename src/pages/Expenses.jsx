import Navbar from "../components/Navbar"
import MonthSelector from "../components/MonthSelector"
import NewExpense from "../components/Expenses/NewExpense"
import ListExpense from "../components/Expenses/ListExpense"
import FavExpense from "../components/Expenses/FavExpense"

const Expenses = () => {
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center gap-4 ">
            <Navbar />
            <div className="w-3/4 h-full flex flex-col justify-evenly items-center ">
                <MonthSelector /> 
                <div className="flex flex-row justify-evenly items-center w-full h-100 min-h-[70%] bg-light-pastel-pink p-8 rounded-3xl gap-8">
                    <div className="Left flex flex-col justify-center items-center gap-8 h-full w-[50%]">
                        <NewExpense />
                        <FavExpense />
                    </div>
                    <ListExpense />
                </div>
            </div>
        </div>
    )
}

export default Expenses
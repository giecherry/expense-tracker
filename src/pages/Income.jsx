import Navbar from "../components/Navbar"
import MonthSelector from "../components/MonthSelector"

const Income = () => {
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-neutral-beige gap-4 ">
            <Navbar />
            <div className="w-3/4 h-full flex flex-col justify-around items-center">
                <MonthSelector /> 
                <h1>Income</h1>
                <h1 className="text-4xl font-bold">Welcome to Tumi</h1>
                <p className="text-lg">Your personal finance tracker</p>
            </div>
        </div>
    )
}

export default Income
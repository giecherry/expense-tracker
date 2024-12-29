import Navbar from "../components/Navbar"
import MonthSelector from "../components/MonthSelector"


const Tracker = () => {
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-neutral-beige gap-4 ">
            <Navbar />
            <div className="w-3/4 h-full flex flex-col justify-evenly items-center">
                <MonthSelector />
                <div className="flex flex-row justify-evenly items-center w-full h-100 min-h-[70%] bg-light-pastel-pink p-8 rounded-3xl">
                    <h1>Tracker</h1>
                    <h1 className="text-4xl font-bold">Welcome to Tumi</h1>
                    <p className="text-lg">Your personal finance tracker</p>
                </div>
            </div>
        </div>
    )
}

export default Tracker
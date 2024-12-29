import Navbar from "../components/Navbar"


const Expenses = () => {
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-neutral-beige">
            <Navbar />
            <div className="w-3/4 h-full flex flex-col justify-center items-center">
                <h1>Expenses</h1>
                <h1 className="text-4xl font-bold">Welcome to Tumi</h1>
                <p className="text-lg">Your personal finance tracker</p>
            </div>
        </div>
    )
}

export default Expenses
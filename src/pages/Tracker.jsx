import Navbar from "../components/Navbar"
import MonthSelector from "../components/MonthSelector"
import TrackerList from "../components/Tracker/TrackerList"


const Tracker = () => {
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-neutral-beige gap-4 ">
            <Navbar />
            <div className="w-3/4 h-full flex flex-col justify-evenly items-center">
                <MonthSelector />
                <div className="flex flex-row justify-evenly items-center w-full h-100 min-h-[70%] bg-light-pastel-pink p-8 rounded-3xl gap-8">
                    <div className="Left flex flex-col justify-center items-center gap-8 h-full w-full">
                        <TrackerList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracker
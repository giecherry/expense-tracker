import Navbar from "../components/Navbar"
import Dashboard from "../components/Dashboard"

const Home = () => {
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-neutral-beige gap-4  ">
            <Navbar />
            <Dashboard/>
        </div>
    )
}

export default Home
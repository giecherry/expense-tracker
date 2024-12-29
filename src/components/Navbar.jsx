import Logo from "../assets/logo.png"
import LogOutBtn from "../components/LogOutBtn"
import { Link } from "react-router-dom"



const Navbar = () => {
    return (
        <>
            <nav className="flex flex-col items-center justify-between p-4 w-1/5 border-r-2 border-muted-rose h-[90%]">
                <Link to={"/home"}>
                    <div className="logo rounded-full flex justify-center">
                                    <img className="rounded-full p-2 m-2 w-1/2" src={Logo} alt="Tumi logo" />
                    </div>
                </Link>
                <Link to={"/home"} className="rounded-3xl p-2 px-8 border-transparent hover:bg-light-pink hover:shadow-soft-pink"><h1 >Dashboard</h1></Link>
                <Link to={"/expenses"} className="rounded-3xl p-2 px-8 border-transparent hover:bg-light-pink hover:shadow-soft-pink"><h1>Expenses</h1></Link>
                <Link to={"/income"} className="rounded-3xl p-2 px-8 border-transparent hover:bg-light-pink hover:shadow-soft-pink"><h1>Income</h1></Link>
                <Link to={"/savings"} className="rounded-3xl p-2 px-8 border-transparent hover:bg-light-pink hover:shadow-soft-pink"><h1>Savings</h1></Link>
                <Link to={"/tracker"} className="rounded-3xl p-2 px-8 border-transparent hover:bg-light-pink hover:shadow-soft-pink"><h1>Payment Tracker</h1></Link>
                <LogOutBtn />
            </nav>
            
        </>
    );
    }

export default Navbar;
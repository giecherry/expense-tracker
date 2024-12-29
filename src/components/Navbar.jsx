import Logo from "../assets/logo.png"
import LogOutBtn from "../components/LogOutBtn"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="flex flex-col items-center justify-between p-4 w-1/5 border-r-2 border-muted-rose h-[90%]">
                <Link to={"/home"}>
                    <div className="logo rounded-full flex justify-center">
                                    <img className="rounded-full p-2 m-2 w-1/2" src={Logo} alt="Tumi logo" />
                    </div>
                </Link>
                <NavLink to={"/home"} className={({ isActive }) =>`rounded-3xl p-2 px-8 border-transparent ${isActive ? "bg-light-pink shadow-soft-pink" : "hover:bg-light-pink hover:shadow-soft-pink"}`}><h1 >Dashboard</h1></NavLink>
                <NavLink to={"/expenses"} className={({ isActive }) =>`rounded-3xl p-2 px-8 border-transparent ${isActive ? "bg-light-pink shadow-soft-pink" : "hover:bg-light-pink hover:shadow-soft-pink"}`}><h1>Expenses</h1></NavLink>
                <NavLink to={"/income"} className={({ isActive }) =>`rounded-3xl p-2 px-8 border-transparent ${isActive ? "bg-light-pink shadow-soft-pink" : "hover:bg-light-pink hover:shadow-soft-pink"}`}><h1>Income</h1></NavLink>
                <NavLink to={"/savings"} className={({ isActive }) =>`rounded-3xl p-2 px-8 border-transparent ${isActive ? " bg-light-pink shadow-soft-pink" : "hover:bg-light-pink hover:shadow-soft-pink"}`}><h1>Savings</h1></NavLink>
                <NavLink to={"/tracker"} className={({ isActive }) =>`rounded-3xl p-2 px-8 border-transparent ${isActive ? "bg-light-pink shadow-soft-pink" : "hover:bg-light-pink hover:shadow-soft-pink"}`}><h1>Payment Tracker</h1></NavLink>
                <LogOutBtn />
            </nav>
            
        </>
    );
    }

export default Navbar;
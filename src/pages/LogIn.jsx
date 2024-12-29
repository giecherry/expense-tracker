import {Link} from 'react-router-dom'
import SignUp from "./SignUp"
import Logo from "../assets/logo.png"
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const LogIn = () => {
    const Navigate = useNavigate();
    const {handleUserName, handlePassword, inUser, handleLogIn, checkUser} = useContext(UserContext)

    useEffect(() => {
        sessionStorage.setItem("Inloggad user:", JSON.stringify(inUser))
    },[inUser])

    const handleClick = () => {
        if(checkUser() === undefined){
            alert("Wrong username or password. Try again!");
        }
        else {handleLogIn();
        Navigate('/home');
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-neutral-beige">
            <div className="flex flex-col justify-center items-center p-16 m-4 rounded-[15px] shadow-soft-pink bg-light-pastel-pink w-1/3">   
                <div className="logo rounded-full flex justify-center">
                    <img className="rounded-full p-2 m-2 h-1/2 w-1/2" src={Logo} alt="Tumi logo" />
                </div>
                <h1 className='text-2xl'>Welcome!</h1>
                <input className="rounded-3xl p-2 px-4 m-2 hover:shadow-soft-pink" type="text" onChange={handleUserName} placeholder='Username' />
                <input className="rounded-3xl p-2 px-4 m-2 hover:shadow-soft-pink " type="password" onChange={handlePassword} placeholder='Password'/>
                <h5>Are you new? <Link to="/signup" element= {<SignUp/>} className='hover:text-deep-rose'>Sign up!</Link></h5>
                <button className="rounded-3xl p-2 px-4 m-2 w-1/4 bg-muted-rose hover:bg-deep-rose shadow-soft-pink" onClick={handleClick}>Log in</button>
            </div>
            
        </div>
    )
}

export default LogIn
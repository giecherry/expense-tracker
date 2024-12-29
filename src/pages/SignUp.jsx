import {Link} from 'react-router-dom'
import LogIn from "./LogIn"
import { useEffect } from 'react'
import Logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

const SignUp = () => { 
    const Navigate = useNavigate();
    const {handleUserName, handlePassword, regUsers, addNewUser, inUser} = useContext(UserContext)

    useEffect(() => {
        localStorage.setItem("Registrerad users:", JSON.stringify(regUsers))
    },[regUsers])

    const handleClick = () => {
        addNewUser();
        Navigate('/');
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-neutral-beige">
            <div className="flex flex-col justify-center items-center p-16 m-4 rounded-[15px] shadow-soft-pink bg-light-pastel-pink  w-1/3">
                <div className="logo rounded-full flex justify-center">
                    <img className="rounded-full p-2 m-2 h-1/2 w-1/2" src={Logo} alt="Tumi logo" />
                </div>
                <h1 className='text-2xl'>Become a member!</h1>
                <input className="rounded-3xl p-2 px-4 m-2 hover:shadow-soft-pink" type="text" onChange={handleUserName} placeholder="Username"/>
                <input className="rounded-3xl p-2 px-4 m-2 hover:shadow-soft-pink" type="text" placeholder="E-mail" />
                <input className="rounded-3xl p-2 px-4 m-2 hover:shadow-soft-pink" type="password" onChange={handlePassword} placeholder='Password'/>
                <h5>Already a member? <Link to="/" element= {<LogIn/>} className='hover:text-deep-rose'>Log in!</Link></h5>
                <button className="rounded-3xl p-2 px-4 m-2 w-1/4 bg-muted-rose hover:bg-deep-rose shadow-soft-pink" onClick={handleClick}>Sign in</button>
            </div>
            
        </div>
    )
}

export default SignUp
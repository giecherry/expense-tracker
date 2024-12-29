import MonthSelector from './MonthSelector';
import logo from '../assets/logo.png';

const Dashboard = () => {

    return (
        <>
        
            <div className="w-3/4 h-full flex flex-col justify-evenly items-center gap-0">
                <MonthSelector />  
                <div className="flex flex-row justify-evenly items-center w-full h-100 min-h-[70%] bg-light-pastel-pink p-8 rounded-3xl gap-8">
                    
                    <div className="right flex flex-col justify-evenly items-center w-[50%] h-full gap-8">
                        <div className="flex flex-col items-center justify-center  bg-neutral-beige rounded-3xl p-12  w-[70%] h-full">
                            <h2>Total balance: 500kr</h2>
                            <h3>Income:500kr</h3>
                            <h3>Expenses:500kr</h3>
                            <h3>Savings:500kr</h3>
                        </div>
                        <div className="graph-income bg-neutral-beige rounded-3xl w-[50%] h-full">
                            <img src={logo} className='h-56 w-96 rounded-3xl'/>
                        </div>
                    </div>
    
                    <div className="left flex flex-col justify-evenly items-center w-[50%] h-full gap-8 ">
                        <div className="piegraph-budget bg-neutral-beige rounded-3xl w-[50%] h-full">
                                <img src={logo} className='h-56 w-56 rounded-full'/>
                        </div>
                        <div className="graph-expenses bg-neutral-beige rounded-3xl w-[50%] h-full">
                            <img src={logo} className='h-56 w-96 rounded-3xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}   

export default Dashboard;
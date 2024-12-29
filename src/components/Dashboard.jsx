import MonthSelector from './MonthSelector';
import logo from '../assets/logo.png';

const Dashboard = () => {

    return (
        <>
        
            <div className="w-3/4 h-full flex flex-col justify-evenly items-center gap-0">
                <MonthSelector />  
                <div className="flex flex-col justify-center items-center gap-8 min-h-[70%]">
                    
                    <div className="flex flex-row justify-evenly items-center w-full h-1/2">
                        <div className="flex flex-col items-center justify-center  bg-light-pink rounded-3xl p-12 gap-2 h-full w-2/5">
                            <h2>Total balance: 500kr</h2>
                            <h3>Income:500kr</h3>
                            <h3>Expenses:500kr</h3>
                            <h3>Savings:500kr</h3>
                        </div>
                        <div className="piegraph-budget">
                                <img src={logo} className='h-56 w-56'/>
                        </div>
                    </div>
    
                    <div className="flex flex-row justify-evenly items-center w-full h-1/2 gap-8 ">
                        <div className="graph-income">
                            <img src={logo} className='h-56 w-96'/>
                        </div>
                        <div className="graph-expenses">
                            <img src={logo} className='h-56 w-96'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}   

export default Dashboard;
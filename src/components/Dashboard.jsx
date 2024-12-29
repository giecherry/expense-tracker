import MonthSelector from './MonthSelector';

const Dashboard = () => {

    return (
        <>
        
            <div className="w-3/4 h-full flex flex-col justify-around items-center">
                <MonthSelector />  
                <h1 className="text-4xl font-bold">Welcome to Tumi</h1>
                <p className="text-lg">Your personal finance tracker</p>
            </div>
        </>
    );
}   

export default Dashboard;
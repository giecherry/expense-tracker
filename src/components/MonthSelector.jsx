import { format, addMonths, subMonths} from 'date-fns';
import { useState } from 'react';
import arrowRight from '../assets/icons/arrow-r.svg';
import arrowLeft from '../assets/icons/arrow-l.svg';

const MonthSelector = () => {
    //*Handle month change------------------
    const [currentMonth, setCurrentMonth] = useState(new Date());
/*     const dataThisMonth = data .filter(data =>format(data.creationDate, "yyyy-MM") === format(currentMonth, "yyyy-MM") && data.owner === inUser.userName);
 */    const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    //*--------------------------------

    return (
        <div className="flex flex-row justify-around items-center w-full p-6 px-20 bg-light-pastel-pink rounded-3xl" >
            <button onClick={handlePrevMonth}><span><img src={arrowLeft} alt="arrow right" /></span></button>
            <h2 className='text-2xl'>{format(currentMonth, "MMMM")}</h2>
            <button onClick={handleNextMonth}><span><img src={arrowRight} alt="arrow right" /></span></button>
        </div>
    );
}

export default MonthSelector;
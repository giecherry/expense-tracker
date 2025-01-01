const FavExpense = () => {

    return (
        <div className="container bg-neutral-beige rounded-3xl p-8 h-auto gap-2">
        <h1 className="border-b-2 border-muted-rose p-2 m-2 ">Favourites</h1>
        <div className="flex flex-col min-w-[100%] min-h-[80%] max-h-[50%] overflow-y-auto">
            <h5 className="p-2 flex justify-between items-center"><p>Expense1</p> <p>500kr</p><button className="rounded-3xl p-1  m-2 w-1/6 bg-muted-rose hover:bg-deep-rose shadow-soft-pink">+</button></h5>
            <h5 className="p-2 flex justify-between items-center" ><p>Expense2</p> <p>500kr</p><button className="rounded-3xl p-1 m-2 w-1/6 bg-muted-rose hover:bg-deep-rose shadow-soft-pink ">+</button></h5>
            <h5 className="p-2 flex justify-between items-center"><p>Expense3</p> <p>500kr</p><button className="rounded-3xl p-1 m-2 w-1/6 bg-muted-rose hover:bg-deep-rose shadow-soft-pink">+</button></h5>
        </div>
        </div>
    );
    }

export default FavExpense;
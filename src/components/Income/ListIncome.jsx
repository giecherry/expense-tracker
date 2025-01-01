const ListIncome = () => {
    return (
        <div className="container bg-neutral-beige rounded-3xl p-8 h-full w-1/2">
            <div className="flex flex-row justify-between border-b-2 border-muted-rose p-1 pb-4 m-2">
                <h3>Filter by:</h3>
                <p>Category</p>
                <p>Ascending</p>
            </div>
            <div className="ListIncome flex flex-col min-w-[100%] min-h-[90%] max-h-[50%] overflow-y-auto">
                <h5 className="p-2 flex justify-between items-center"><p>Income1</p> <p>500kr</p><button className="rounded-3xl p-1  m-2 w-1/6 bg-muted-rose hover:bg-deep-rose shadow-soft-pink">x</button></h5>
                <h5 className="p-2 flex justify-between items-center"><p>Income2</p> <p>500kr</p><button className="rounded-3xl p-1  m-2 w-1/6 bg-muted-rose hover:bg-deep-rose shadow-soft-pink">x</button></h5>
                <h5 className="p-2 flex justify-between items-center"><p>Income3</p> <p>500kr</p><button className="rounded-3xl p-1  m-2 w-1/6 bg-muted-rose hover:bg-deep-rose shadow-soft-pink">x</button></h5>
            </div>
        </div>
    );
}

export default ListIncome;
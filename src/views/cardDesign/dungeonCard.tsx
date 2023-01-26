import react from 'react'


export default function DungeonCards(props:any){

    // const [dungeonData, setDungeonData] = react.useState([])
    
    // react.useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then(res => res.json())
    //         .then(data => setDungeonData(data))
    // }, [])


    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={props.image} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            </a>
            <button className=" drop-shadow-xl hover:scale-125 transition bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
             <h2 className="text-4xl p-2">Load saved</h2>
            </button>
        </div>
    </div>
    )
}
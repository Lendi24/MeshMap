import react from 'react'


export default function DungeonCards(props:any){

    // const [dungeonData, setDungeonData] = react.useState([])
    
    // react.useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then(res => res.json())
    //         .then(data => setDungeonData(data))
    // }, [])

    return (
        <div className="min-w-200 max-w-200 w-200 h-24 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
            <a className="flex flex-col h-full w-full" href="#">
                <div className="h-1/3 overflow-hidden">
                    <img className="rounded-t-lg" src={props.image} alt="" />
                </div>
                <div className="h-2/3 overflow-hidden">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                </div>
            </a>
        </div>
    );
}
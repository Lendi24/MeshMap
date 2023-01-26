import react from 'react'


export default function DungeonCards(props:any){

    // const [dungeonData, setDungeonData] = react.useState([])
    
    // react.useEffect(() => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then(res => res.json())
    //         .then(data => setDungeonData(data))
    // }, [])

    return (
    <div className="max-w-sm w-sm rounded overflow-hidden shadow-lg" style={{ minWidth: '24rem' }}>
        <a href="">
            <div className="h-2/3 overflow-hidden">
                <img src={props.image} alt="Sunset in the mountains"/>
            </div>
            <div className="h-1/3 px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                    Hola
                </p>
            </div>
        </a>
    </div>
    );
}
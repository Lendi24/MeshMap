import react from 'react'
import DungeonCards from './dungeonCard'
export default function CompiledDungeons(){



    const [dungeonData, setDungeonData] = react.useState(Array<any>());
    
    react.useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then((data) => setDungeonData(data as Array<any>))
    }, [])



    const cards = dungeonData.map((item) => {
        console.log(item)
        return (
            <DungeonCards 
                image={item.image}
                title={item.title}
              
            />
        )
    })        


    return(
        <>
        { cards }
        </>
        
    )



}
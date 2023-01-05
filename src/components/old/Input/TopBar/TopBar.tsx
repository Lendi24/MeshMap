import data from "./data";

function TopBar(props:any) {
    return (
        <span 
            title={props.title} 
            className="
                text-white 
                border-2 
                rounded 
                hover:bg-green-700 
                hover:scale-110 
                transform transition-all 
                w-10
            " >
        </span>
    )
}

export default data.map(item => {
    return (
        <TopBar
            key     =  {item.title}
        />
    )
})        


import data from "./data";
import Icon from '@mdi/react';

function ToolButton(props:any) {
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
                w-10" >
            <Icon path={props.icon}></Icon>
        </span>
    )
}

export default data.map(item => {
    return (
        <ToolButton
            key     =  {item.title}
            title   =  {item.title}
            icon    =  {item.icon}
        />
    )
})        

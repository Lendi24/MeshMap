import Icon from '@mdi/react';

interface ToolState {
    key     :   string
    index   :   number
    title   :   string
    icon    :   string
    onClick :   Function
}


function ToolButton(props:ToolState) {
    //const [selectedToolId, setToolId] = React.useState(() => {return 0;});      
    //const [Sidepage,Setpages] = React.useState(()=>pages[currentPage]);

    return (
        <span 
            onClick={(e)=>{ props.onClick(e); }}
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

export default ToolButton;

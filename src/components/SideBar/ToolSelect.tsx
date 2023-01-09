import ToolButton from './ToolSelect/Tool';

interface ToolSelectState {
    tools : any, 
    toolsOnClick : Function,
    toolsIdPrefix : string,
}

function ToolSelect(props:ToolSelectState) {
    let tools = props.tools.map((item:any, index:number) => 
        (
            <ToolButton
                id      =  {props.toolsIdPrefix+index}
                key     =  {index+item.data.title}
                index   =  {index}
                title   =  {item.data.title}
                icon    =  {item.data.icon}
                onClick =  {props.toolsOnClick}
            />
        )
    )
        
    return (
        <div 
            className="flex flex-row flex-wrap bg-gray-600 z-20">
            {tools}
        </div>
    );
}

export default ToolSelect;






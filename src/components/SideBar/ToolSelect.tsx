import ToolButton from './ToolSelect/Tool';

interface ToolSelectState {
    tools : any, 
    toolsOnClick : any,
    toolsIdPrefix : string,
}

function ToolSelect(props:ToolSelectState) {
    let tools = props.tools.map((item:any, index:number) => 
        (
            <ToolButton
                key     =  {index+item.data.title}
                index   =  {index}
                title   =  {item.data.title}
                icon    =  {item.data.icon}
                onClick =  {props.toolsOnClick}
            />
        )
    )
        
    return (<div>{tools}</div>)
}

export default ToolSelect;






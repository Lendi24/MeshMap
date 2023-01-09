/*
function ConfigSelect(props:any) {
    console.log(props.toolConf/*.conf*//*)
    return (
        <span>{}</span>
    )
}

export default ConfigSelect;
*/





import ConfigSelector from './ConfigSelect/Selector';

interface ConfigSelectState {
    selectors:any;
}

function ConfigSelect(props:ConfigSelectState) {
    /*
    let selectors = props.selectors.map((item:any, index:number) => 
        (
            <ConfigSelector
                id      =  {index+"selector"}
                key     =  {index}
                index   =  {index}
            />
        )
    )*/

    let selectors = 
    (
        <ConfigSelector
            id      =  {"index"+"selector"}
            key     =  {65}
            index   =  {5}
        />
    )


        
    return (
        <div 
            className="flex flex-row flex-wrap bg-gray-600 z-20">
            {selectors}
        </div>
    );
}

export default ConfigSelect;


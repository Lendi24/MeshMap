interface SelectorStateSlider {
    onChange:   Function,

    id      :   string,
    title   :   string,

    min     :   number, 
    val     :   number,
    max     :   number,
}

interface SelectorStateBox {
    id      :   string,
    title   :   string,
}



export function ConfigSelectorSlider(props:SelectorStateSlider) {
    return (
        <div className="
            border-2 
            rounded 
            flex 
            flex-col
            flex-grow" >
            <b className="m-2">
                {props.title}
            </b>
            <input 
                onChange={(e)=>{ props.onChange(e); }}
                //title={props.title} 
                id={props.id}
                type="range"

                min             ={props.min}
                defaultValue    ={props.val}
                max             ={props.max}  

                className="
                    border-2 
                    m-2
                    rounded 
                    flex-grow
                    hover:scale-105 
                    transform transition-all" >
            </input>
        </div>
    )
}

export function ConfigSelectorBox(props:SelectorStateBox) {
    return (
        <div className="
            border-2 
            rounded 
            flex 
            flex-col
            flex-grow" >
            <b className="m-2">
                {props.title}
            </b>
            <input 
                //onClick={(e)=>{ props.onClick(e); }}
                //title={props.title} 
                id={props.id}
                type="checkbox"
                className="
                    border-2 
                    m-2
                    rounded 
                    flex-grow
                    hover:scale-105 
                    transform transition-all" >
            </input>
        </div>
    )
}

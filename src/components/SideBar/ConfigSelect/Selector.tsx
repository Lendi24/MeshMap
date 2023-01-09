interface SliderSelectorState {
    id      :   string
    index   :   number
}


function ConfigSelector(props:SliderSelectorState) {

    return (
        <div className="
            border-2 
            m-2
            rounded 
            flex 
            flex-col
            flex-grow" >
            <b className="m-2">
                Title
            </b>
            <input 
                //onClick={(e)=>{ props.onClick(e); }}
                //title={props.title} 
                id={props.id}
                type="range"
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

export default ConfigSelector;
